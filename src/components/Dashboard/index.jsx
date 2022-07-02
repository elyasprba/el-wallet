import { useState } from 'react';
import styles from './dashboard.module.css';
import { Grid, ArrowUpShort, PlusLg, Person, BoxArrowRight } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function Dashboard(props) {
   return (
      <>
         <section className={styles.container}>
            <div className={styles.maincontainer}>
               <div className={styles.main}>
                  <Grid height={30} width={30} />
                  <Link href="/home">
                     <div className={props.isActive === 'home' ? styles.dashboardActive : styles.dashboard}>Dashboard</div>
                  </Link>
               </div>
               <div className={styles.main}>
                  <ArrowUpShort height={30} width={30} />
                  <Link href="#">
                     <div className={props.isActive === 'Transfer' ? styles.dashboardActive : styles.dashboard}>Transfer</div>
                  </Link>
               </div>
               <div className={styles.main}>
                  <PlusLg height={30} width={30} />
                  <Link href="/topup">
                     <div className={props.isActive === 'topup' ? styles.dashboardActive : styles.dashboard}>Top Up</div>
                  </Link>
               </div>
               <div className={styles.main}>
                  <Person height={30} width={30} />
                  <Link href="#">
                     <div className={props.isActive === 'profile' ? styles.dashboardActive : styles.dashboard}>Profile</div>
                  </Link>
               </div>

               <div className={styles.mainlogout}>
                  <BoxArrowRight height={30} width={30} />
                  <div className={props.isActive === 'logout' ? styles.dashboardActive : styles.dashboard}>Logout</div>
               </div>
            </div>
         </section>
      </>
   );
}
