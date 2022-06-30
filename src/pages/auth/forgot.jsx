import styles from './forgot.module.css';
import { Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';

export default function Signup() {
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
               <button className={styles.signupbutton}>Confirm</button>
            </div>
         </main>
      </>
   );
}
