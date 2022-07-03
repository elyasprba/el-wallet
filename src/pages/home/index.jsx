import styles from './home.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowUpShort, PlusLg, ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import Loading from '../../components/Loading';

export default function Home() {
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const balance = useSelector((state) => state.userInfoReducer.userInfo.balance);
   const [isActive, setIsActive] = useState('home');
   const [isLoading, setIsLoading] = useState(false);

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
                     <p className={styles.balanceprice}>Rp{balance ? balance : 'tes'}</p>
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
                              <div className={styles.total}>Rp2.120.000</div>
                           </div>
                           <div className={styles.expense}>
                              <ArrowUp className={styles.icon} />
                              <div className={styles.title}>Expense</div>
                              <div className={styles.total}>Rp1.560.000</div>
                           </div>
                        </div>
                        <div className={styles.chartBottom}>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Sat</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Sun</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Mon</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Tue</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Wed</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Thu</div>
                           </div>
                           <div className={styles.dayContainer}>
                              <div className={styles.bar} style={{ height: '80%' }}></div>
                              <div className={styles.day}>Fri</div>
                           </div>
                        </div>
                     </section>
                     <section className={styles.historyContainer}>
                        <div className={styles.titleContainer}>
                           <div className={styles.title}>Transaction History</div>
                           <div className={styles.seeAll}>See all</div>
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
