import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import styles from './profile.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';

export default function Info() {
   const [isActive, setIsActive] = useState('profile');
   return (
      <>
         <Layout title="profile-info" />
         <Navbar />
         <section className={styles.container}>
            <Dashboard isActive={isActive} />
         </section>
         <Footer />
      </>
   );
}
