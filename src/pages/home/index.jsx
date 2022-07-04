import styles from './home.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArrowUpShort, PlusLg, ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import Loading from '../../components/Loading';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
   const id = useSelector((state) => state.loginReducer.loginData.id);
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const balance = useSelector((state) => state.userInfoReducer.userInfo.balance);
   const [isActive, setIsActive] = useState('home');
   const [isLoading, setIsLoading] = useState(false);
   const [dashboard, setDashboard] = useState({});
   const { listIncome = [], listExpense = [] } = dashboard;

   useEffect(() => {
      const getDashboard = async () => {
         try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const result = await axios.get(`https://fazzpay.herokuapp.com/dashboard/${id}`, config);
            setDashboard(result.data.data);
         } catch (error) {
            console.log(error);
         }
      };
      getDashboard();
   }, []);

   return (
      <>
         <Layout title="Home" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
            <div className={styles.groupbarchar}>
               <div className={styles.maincontainer}>
                  <div>
                     <p className={styles.balancename}>Balance</p>
                     <p className={styles.balanceprice}>Rp{balance ? balance : '0'}</p>
                     <p className={styles.balancephone}>{noTelp ? noTelp : 'Please enter phone number'}</p>
                  </div>
                  <div className={styles.buttongruop}>
                     <button className={styles.transfer}>
                        <ArrowUpShort />
                        Transfer
                     </button>
                     <button className={styles.transfer}>
                        <PlusLg />
                        Top up
                     </button>
                  </div>
               </div>
               <div>
                  <section className={styles.bottomContainer}>
                     <section className={styles.chartContainer}>
                        <div className={styles.chartTop}>
                           <div className={styles.income}>
                              <ArrowDown className={styles.icon} />
                              <div className={styles.title}>Income</div>
                              <div className={styles.total}>Rp {dashboard.totalIncome ? dashboard.totalIncome : '0'}</div>
                           </div>
                           <div className={styles.expense}>
                              <ArrowUp className={styles.icon} />
                              <div className={styles.title}>Expense</div>
                              <div className={styles.total}>Rp {dashboard.totalExpense ? dashboard.totalExpense : '0'}</div>
                           </div>
                        </div>
                        <div className={styles.chartBottom}>
                           {listIncome.map((dashboard) => (
                              <div className={styles.dayContainer}>
                                 <div className={styles.bar} style={{ height: `${dashboard.total}px` }}></div>
                                 <div className={styles.day}>{dashboard.day}</div>
                              </div>
                           ))}
                        </div>
                     </section>
                     <section className={styles.historyContainer}>
                        <div className={styles.titleContainer}>
                           <div className={styles.title}>Transaction History</div>
                           <Link href="/history">
                              <div className={styles.seeAll}>See all</div>
                           </Link>
                        </div>
                        <div className={styles.transactionContainer}>
                           <div className={styles.item}>
                              <div className={styles.pictNameContainer}>
                                 <div className={styles.profPictContainer}>{/* <Image src={Profpict} className={styles.profPict} /> */}</div>
                                 <div className={styles.nameContainer}>
                                    <div className={styles.name}>Samuel Suhi</div>
                                    <div className={styles.status}>Accept</div>
                                 </div>
                              </div>
                              <div className={`${styles.nominal} ${styles.out}`}>-Rp50.000</div>
                           </div>
                           <div className={styles.item}>
                              <div className={styles.pictNameContainer}>
                                 <div className={styles.profPictContainer}>{/* <Image src={Profpict} className={styles.profPict} /> */}</div>
                                 <div className={styles.nameContainer}>
                                    <div className={styles.name}>Samuel Suhi</div>
                                    <div className={styles.status}>Accept</div>
                                 </div>
                              </div>
                              <div className={`${styles.nominal} ${styles.in}`}>+Rp50.000</div>
                           </div>
                        </div>
                     </section>
                  </section>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
}
