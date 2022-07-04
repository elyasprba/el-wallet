import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import styles from './profile.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import Link from 'next/link';
import axios from 'axios';

export default function EditNumber() {
   const id = useSelector((state) => state.loginReducer.loginData.id);
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const [isActive, setIsActive] = useState('profile');
   const [noTelp, setNoTelp] = useState('');

   const updatePhone = async () => {
      try {
         const body = {
            noTelp,
         };
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.patch(`${process.env.NEXT_PUBLIC_HOST}/user/profile/${id}`, body, config);
         console.log('UPDATE NUMBER PHONE SUCCESS', result.data.data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Layout title="Edit-Number" />
         <Layout title="profile-info" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
            <section className={styles.maincontainer}>
               <h5>Edit Phone Number</h5>
               <p className={styles.descprofile}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
               <div className={styles.inputContainer}>
                  <label htmlFor="phone">
                     +62
                     <input type="number" placeholder="Enter your phone number" onChange={(e) => setNoTelp(e.target.value)} />
                  </label>
                  <button className={styles.button} onClick={updatePhone}>
                     Edit Phone Number
                  </button>
               </div>
            </section>
         </section>
         <Footer />
      </>
   );
}
