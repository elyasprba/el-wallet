import styles from './home.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import { useState } from 'react';

export default function Home() {
   const [isActive, setIsActive] = useState('home');

   return (
      <>
         <Layout title="Home" />
         <Navbar />
         <Dashboard isActive={isActive} />
         <div>INI HALAMAN HOME</div>
         <Footer />
      </>
   );
}
