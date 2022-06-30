import { useState } from 'react';
import styles from './signup.module.css';
import { Person, Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';
import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import Link from 'next/link';
import axios from 'axios';

export default function Signup() {
   const [showPass, setShowPass] = useState(false);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const register = async () => {
      try {
         const body = {
            firstName,
            lastName,
            email,
            password,
         };
         const result = await axios.post(`https://fazzpay.herokuapp.com/auth/register`, body);
         alert(result.data.msg);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Layout title="Sign Up" />
         <section className={styles.container}>
            <Aside />
            <main className={styles.maincontainer}>
               <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
               <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
               <div className="register-form-sign">
                  <div className={styles.inputname}>
                     <Person height={30} width={30} />
                     <input
                        type="text"
                        id="name"
                        placeholder="Enter your firstname"
                        onChange={(e) => {
                           setFirstName(e.target.value);
                        }}
                     />
                  </div>
                  <div className={styles.inputname}>
                     <Person height={30} width={30} />
                     <input
                        type="text"
                        id="name"
                        placeholder="Enter your lastname"
                        onChange={(e) => {
                           setLastName(e.target.value);
                        }}
                     />
                  </div>
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
                        placeholder="Create your password"
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
                  <button className={styles.signupbutton} onClick={register}>
                     Sign Up
                  </button>
               </div>
               <p className={styles.descsignup}>
                  Already have an account? Let’s <Link href="/login">Login</Link>
               </p>
            </main>
         </section>
      </>
   );
}
