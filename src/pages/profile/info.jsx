import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import styles from './profile.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Info() {
   const firstName = useSelector((state) => state.userInfoReducer.userInfo.firstName);
   const lastName = useSelector((state) => state.userInfoReducer.userInfo.lastName);
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const email = useSelector((state) => state.userInfoReducer.userInfo.email);
   const [isActive, setIsActive] = useState('profile');

   return (
      <>
         <Layout title="profile-info" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
            <section className={styles.maincontainer}>
               <h5>Personal Information</h5>
               <p className={styles.descprofile}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
               <div className={styles.firstNameInfo}>
                  <p className={styles.firstName}>First Name</p>
                  <div className={styles.nameInfo}>{firstName}</div>
               </div>
               <div className={styles.firstNameInfo}>
                  <p className={styles.firstName}>Last Name</p>
                  <div className={styles.nameInfo}>{lastName}</div>
               </div>
               <div className={styles.firstNameInfo}>
                  <p className={styles.firstName}>Verified E-mail</p>
                  <div className={styles.nameInfo}>{email}</div>
               </div>
               <div className={styles.firstNameInfoNumber}>
                  <div>
                     <p className={styles.firstName}>Phone Number</p>
                     <div className={styles.nameInfo}>{noTelp ? noTelp : 'Phone number does not exist'}</div>
                  </div>
                  <div>
                     <Link href="/profile/editnumber">
                        <p className={styles.manage}>Manage</p>
                     </Link>
                  </div>
               </div>
            </section>
         </section>
         <Footer />
      </>
   );
}
