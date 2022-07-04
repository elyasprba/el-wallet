import styles from './transfer.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Transfer() {
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const [transfer, setTransfer] = useState([]);
   const [search, setSearch] = useState('');
   const router = useRouter();

   useEffect(() => {
      const getUser = async () => {
         try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            let url = 'https://fazzpay.herokuapp.com/user?page=1&limit=5';
            if (search !== '') {
               url += `&search=${search}`;
            }
            const result = await axios.get(url, config);
            setTransfer(result.data.data);
            console.log(result);
         } catch (error) {
            console.log(error);
         }
      };
      getUser();
   }, [search]);

   return (
      <>
         <Layout title="Transfer" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard />
            <section className={styles.maincontent}>
               <p className={styles.mainTitle}>Search Receiver</p>
               <div className={styles.forminput}>
                  <input
                     type="text"
                     className={styles.inputtransfer}
                     onChange={(e) => {
                        setTimeout(() => {
                           setSearch(e.target.value);
                        }, 2000);
                     }}
                  />
               </div>
               {transfer.map((result) => (
                  <div className={styles.userTransfer} key={result.id} onClick={() => router.push(`/transfer/${result.id}`)}>
                     <div>
                        <Image src={require('../../assets/img.png')} alt="img" width={60} height={60} />
                     </div>
                     <div>
                        <p className={styles.name}>
                           {result.firstName} {result.lastName}
                        </p>
                        <p className={styles.phone}>{result.noTelp ? result.noTelp : 'Phone number not found'}</p>
                     </div>
                  </div>
               ))}
            </section>
         </section>
         <Footer />
      </>
   );
}
