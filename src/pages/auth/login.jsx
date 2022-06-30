import { useEffect, useState } from 'react';
import styles from './login.module.css';
import { Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';

export default function Signup() {
   const [showPass, setShowPass] = useState(false);
   return (
      <>
         <main className={styles.maincontainer}>
            <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
            <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <div className="register-form-sign">
               <div className={styles.inputname}>
                  <Envelope height={30} width={30} />
                  <input type="text" id="name" placeholder="Enter your e-mail" />
               </div>
               <div className={styles.inputname}>
                  <Lock height={27} width={30} />
                  <input type={`${showPass ? 'text' : 'password'}`} id="name" placeholder="Enter your password" />
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
               <button className={styles.signupbutton}>Login</button>
            </div>
            <p className={styles.descsignup}>Don’t have an account? Let’s Sign Up</p>
         </main>
      </>
   );
}
