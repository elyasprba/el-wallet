import { useState, useEffect } from 'react';
import styles from './history.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function History() {
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const [history, setHistory] = useState([]);

   useEffect(() => {
      const getHistory = async () => {
         try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const result = await axios.get(`https://fazzpay.herokuapp.com/transaction/history?page=1&limit=6&filter=week`, config);
            setHistory(result.data.data);
         } catch (error) {
            console.log(error);
         }
      };
      getHistory();
   }, []);

   return (
      <>
         <Layout title="history" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard />
            <section className={styles.maincontainer}>
               <div className={styles.mainheading}>
                  <div>
                     <h6 className={styles.title}>Transaction History</h6>
                  </div>
                  <div>
                     <button>-- Select Filter --</button>
                  </div>
               </div>
               {history.map((result) => (
                  <div className={styles.main} key={result.id}>
                     <div className={styles.mainleft}>
                        <div>
                           <Image src={require('../../assets/img.png')} alt="img" width={60} height={60} />
                        </div>
                        <div>
                           <p className={styles.name}>{result.firstName}</p>
                           <p className={styles.transfer}>{result.type}</p>
                        </div>
                     </div>
                     <div>
                        <p className={styles.price}>{result.amount}</p>
                     </div>
                  </div>
               ))}
            </section>
         </section>
         <Footer />
      </>
   );
}
