import Signup from './signup';
import Login from './login';
import Forgot from './forgot';
import Layout from '../../components/Layout';
import styles from './signup.module.css';
import Aside from '../../components/Aside';
// import { useEffect, useState } from 'react';

function Auth() {
   return (
      <>
         <Layout title="Sign Up" />
         <section className={styles.container}>
            <Aside />
            {/* <Login /> */}
            {/* <Signup /> */}
            <Forgot />
         </section>
      </>
   );
}

export default Auth;
