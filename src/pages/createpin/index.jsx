import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import styles from './pin.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function CreatePin() {
   //    const inputPin = useRef()
   //   const secPin = useRef()
   //   const thirdPin = useRef()
   //   const fourthPin = useRef()
   //   const fivethPin = useRef()
   //   const sixthPin = useRef()
   //   const [btn, setBtn] = useState(false)
   const [pin, setPin] = useState('');
   //   const id = useSelector(state=>state.login.userInfo.id)
   //   const token = useSelector(state=>state.login.userInfo.token)
   //   const createPin = ()=>{
   //     const body = {
   //       pin
   //     }
   //     updatePin(id, body, token)
   //     .then(result=>{
   //       console.log(token)
   //       alert(result.data.msg)
   //     }).catch(err=>{
   //       console.log(err);
   //     })
   //   }
   //   useEffect(()=>{
   //     inputPin.current.focus()
   //   },[])
   const selectUserId = useSelector((state) => state.loginReducer.loginData.id);
   const token = useSelector((state) => state.loginReducer.loginData.token);

   const updatePin = async () => {
      try {
         const body = {
            pin,
         };
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.patch(`https://fazzpay.herokuapp.com/user/pin/${selectUserId}`, body, config);
      } catch (error) {
         console.log(error);
      }
   };

   // const updatePin = (id, body, token) => {
   //    const res = config(token);
   //    return axios.patch(`${process.env.SERVER_HOST}/user/pin/${id}`, body, res);
   // };
   return (
      <>
         <Layout title="Pin Input" />
         <section className={styles.container}>
            <Aside />
            <main className={styles.maincontainer}>
               <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
               <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
               {/* <div className="register-form-sign">
                  <div className={styles.inputname}>
                     <Envelope height={30} width={30} />
                     <input type="text" id="name" placeholder="Enter your e-mail" />
                  </div>
                  <button className={styles.signupbutton}>Confirm</button>
               </div> */}
               <div className={styles.inputpin}>
                  <input
                     // ref={inputPin}
                     type="integer"
                     id="first"
                     // maxLength={1}
                     // onKeyUp={(e) => {
                     //    if (e) {
                     //       secPin.current.focus();
                     //    }
                     // }}
                  />
                  <input
                     // ref={secPin}
                     type="text"
                     id="first"
                     // maxLength={1}
                     // onKeyUp={(e) => {
                     //    if (e) {
                     //       thirdPin.current.focus();
                     //    }
                     // }}
                  />
                  <input
                     // ref={thirdPin}
                     type="text"
                     id="first"
                     // maxLength={1}
                     // onKeyUp={(e) => {
                     //    if (e) {
                     //       fourthPin.current.focus();
                     //    }
                     // }}
                  />
                  <input
                     // ref={fourthPin}
                     type="text"
                     id="first"
                     // maxLength={1}
                     // onKeyUp={(e) => {
                     //    if (e) {
                     //       fivethPin.current.focus();
                     //    }
                     // }}
                  />
                  <input
                     // ref={fivethPin}
                     type="text"
                     id="first"
                     // maxLength={1}
                     // onKeyUp={(e) => {
                     //    if (e) {
                     //       sixthPin.current.focus();
                     //    }
                     // }}
                  />
                  <input type="text" id="first" />
               </div>
               <button className={styles.signupbutton}>Confirm</button>
            </main>
         </section>
      </>
   );
}
