import styles from './aside.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
   return (
      <>
         <aside className={styles.mainaside}>
            <Link href="/">
               <h2 className={styles.titleaside}>el-wallet</h2>
            </Link>
            <div>
               <Image src={require('../../assets/vector/phone-login.png')} alt="img" />
            </div>
            <p className={styles.secondtitleaside}>App that Covering Banking Needs.</p>
            <p className={styles.descaside}>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
         </aside>
      </>
   );
}
