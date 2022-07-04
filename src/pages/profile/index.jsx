import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import styles from './profile.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function Profile() {
   const firstName = useSelector((state) => state.userInfoReducer.userInfo.firstName);
   const lastName = useSelector((state) => state.userInfoReducer.userInfo.lastName);
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const [isActive, setIsActive] = useState('profile');

   return (
      <>
         <Layout title="profile" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
            <section className={styles.maincontainer}>
               <div className={styles.userinfo}>
                  <Image src={require('../../assets/img.png')} alt="img" width={100} height={100} />
                  <p>Edit</p>
                  <p className={styles.name}>
                     {firstName} {lastName}
                  </p>
                  <p className={styles.phone}>{noTelp ? noTelp : 'Phone number does not exist'}</p>
               </div>
               <div className={styles.maininformation}>
                  <Link href="profile/info">
                     <div className={styles.btninformation}>
                        <div className={styles.textinformation}>Personal Information</div>
                        <ArrowRight size={30} />
                     </div>
                  </Link>
               </div>
               <div className={styles.maininformation}>
                  <div className={styles.btninformation}>
                     <div className={styles.textinformation}>Change Password</div>
                     <ArrowRight size={30} />
                  </div>
               </div>
               <div className={styles.maininformation}>
                  <div className={styles.btninformation}>
                     <div className={styles.textinformation}>Change PIN</div>
                     <ArrowRight size={30} />
                  </div>
               </div>
               <div className={styles.maininformation}>
                  <div className={styles.btninformation}>
                     <div className={styles.textinformation}>Logout</div>
                  </div>
               </div>
            </section>
         </section>
         <Footer />
      </>
   );
}
