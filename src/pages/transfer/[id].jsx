import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './transfer.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';
import Footer from '../../components/Footer';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function UserDetails() {
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const [user, setUser] = useState([]);
   const [transferInfo, setTransferInfo] = useState('');
   const [amount, setAmount] = useState('');
   const [notes, setNotes] = useState('');
   const [isActive, setIsActive] = useState('transfer');

   const router = useRouter();

   useEffect(() => {
      const getUserId = async () => {
         try {
            const { id } = router.query;
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const result = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/user/profile/${id}`, config);
            setUser(result.data.data);
            // console.log('GET USER ID', result.data.data);
         } catch (error) {
            console.log(error);
         }
      };
      getUserId();
   }, []);

   const transfer = async () => {
      try {
         const { id } = router.query;
         const body = {
            receiverId: id,
            amount,
            notes,
         };
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/transaction/transfer`, body, config);
         setTransferInfo(result.data.data.id);
         //  console.log('TRANSFER SUCCESS FROM ID', result.data.data.id);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Layout title="Transfer" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
            <section className={styles.maincontent}>
               <p className={styles.mainTitle}>Transfer Money</p>
               <div className={styles.userdetailinfo}>
                  <div>
                     <Image src={require('../../assets/img.png')} alt="img" width={60} height={60} />
                  </div>
                  <div>
                     <p className={styles.name}>
                        {user.firstName} {user.lastName}
                     </p>
                     <p className={styles.phone}>{user.noTelp ? user.noTelp : 'Phone number not found'}</p>
                  </div>
               </div>
               <p className={styles.desctransfer}>Type the amount you want to transfer and then press continue to the next steps.</p>
               <label htmlFor="transfer" className={styles.transferinput}>
                  <input
                     type="number"
                     name="transfer"
                     id="transfer"
                     placeholder="0"
                     onChange={(e) => {
                        setAmount(e.target.value);
                     }}
                  />
               </label>
               <div className={styles.pricetransfer}>Rp.120000- Available</div>
               <div className={styles.noteContainer}>
                  <label htmlFor="notes">
                     <input type="text" id="notes" placeholder="Add some notes" className={styles.note} onChange={(e) => setNotes(e.target.value)} />
                  </label>
               </div>
               <div className={styles.buttonContainer}>
                  <button className={styles.continueButton} onClick={transfer}>
                     Continue
                  </button>
               </div>
            </section>
         </section>
         <Footer />
      </>
   );
}
