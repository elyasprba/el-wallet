import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import styles from './pin.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';

export default function CreatePin() {
   const inputPin = useRef();
   const secPin = useRef();
   const thirdPin = useRef();
   const fourthPin = useRef();
   const fivethPin = useRef();
   const sixthPin = useRef();
   const [pin, setPin] = useState('');
   const selectUserId = useSelector((state) => state.loginReducer.loginData.id);
   const token = useSelector((state) => state.loginReducer.loginData.token);

   const updatePin = async () => {
      try {
         const body = {
            pin,
         };
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.patch(`${process.env.NEXT_PUBLIC_HOST}/user/pin/${selectUserId}`, body, config);
         alert(result.data.msg);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Layout title="Pin Input" />
         <section className={styles.container}>
            <Aside />
            <main className={styles.maincontainer}>
               <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
               <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
               <div className={styles.inputpin}>
                  <input
                     ref={inputPin}
                     type="integer"
                     id="first"
                     maxLength={1}
                     onKeyUp={(e) => {
                        if (e) {
                           secPin.current.focus();
                        }
                     }}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
                  <input
                     ref={secPin}
                     type="text"
                     id="first"
                     maxLength={1}
                     onKeyUp={(e) => {
                        if (e) {
                           thirdPin.current.focus();
                        }
                     }}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
                  <input
                     ref={thirdPin}
                     type="text"
                     id="first"
                     maxLength={1}
                     onKeyUp={(e) => {
                        if (e) {
                           fourthPin.current.focus();
                        }
                     }}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
                  <input
                     ref={fourthPin}
                     type="text"
                     id="first"
                     maxLength={1}
                     onKeyUp={(e) => {
                        if (e) {
                           fivethPin.current.focus();
                        }
                     }}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
                  <input
                     ref={fivethPin}
                     type="text"
                     id="first"
                     maxLength={1}
                     onKeyUp={(e) => {
                        if (e) {
                           sixthPin.current.focus();
                        }
                     }}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
                  <input
                     ref={sixthPin}
                     type="text"
                     id="first"
                     maxLength={1}
                     onChange={(e) => {
                        setPin((prev) => (prev += e.target.value));
                     }}
                  />
               </div>
               <button className={styles.signupbutton} onClick={updatePin}>
                  Confirm
               </button>
            </main>
         </section>
      </>
   );
}
