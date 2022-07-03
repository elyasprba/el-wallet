import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';
import { Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';
import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import Link from 'next/link';
import { loginAuthAction } from '../../redux/actionCreator/login';
import Loading from '../../components/Loading';

export default function Signup() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPass, setShowPass] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const dispatch = useDispatch();

   const login = () => {
      const body = {
         email,
         password,
      };
      dispatch(loginAuthAction(body))
         .then((result) => {
            console.log(result);
            setIsLoading(true);

            // setMsgSuccess(result.data.msg);
         })
         .catch((error) => {
            // console.log(error.response.data.msg);
            // setMsgError(error.response.data);c
            console.log(error);
         });
      setIsLoading(false);
   };

   return (
      <>
         {isLoading && <Loading />}
         <Layout title="Login" />
         <section className={styles.container}>
            <Aside />
            <main className={styles.maincontainer}>
               <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
               <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
               <div className="register-form-sign">
                  <div className={styles.inputname}>
                     <Envelope height={30} width={30} />
                     <input
                        type="text"
                        id="name"
                        placeholder="Enter your e-mail"
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                     />
                  </div>
                  <div className={styles.inputname}>
                     <Lock height={27} width={30} />
                     <input
                        type={`${showPass ? 'text' : 'password'}`}
                        id="name"
                        placeholder="Enter your password"
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                     />
                     <div
                        className="icons-eye"
                        value={showPass}
                        onClick={() => {
                           setShowPass(!showPass);
                        }}
                     >
                        {showPass ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                     </div>
                  </div>
                  <div>
                     <Link href="/forgot">
                        <p className={styles.forgotpassword}>Forgot password?</p>
                     </Link>
                  </div>
                  <Link href="/home">
                     <button className={styles.signupbutton} onClick={login}>
                        Login
                     </button>
                  </Link>
               </div>
               <p className={styles.descsignup}>
                  Don’t have an account? Let’s <Link href="/signup">Sign Up</Link>
               </p>
            </main>
         </section>
      </>
   );
}
