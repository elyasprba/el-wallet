import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAuthAction } from '../../redux/actionCreator/login';
import { deleteUserInfoAction } from '../../redux/actionCreator/userInfo';

import Loading from '../Loading';
import styles from './dashboard.module.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { Grid, ArrowUpShort, PlusLg, Person, BoxArrowRight } from 'react-bootstrap-icons';

export default function Dashboard(props) {
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const [show, setShow] = useState('');
   const [amount, setAmount] = useState(0);
   const [isSuccess, setIsSuccess] = useState(false);
   const [msg, setMsg] = useState('');
   const [redirectUrl, setRedirectUrl] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [showLogout, setShowLogout] = useState(false);

   const dispatch = useDispatch();
   const router = useRouter();

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleTopup = async () => {
      try {
         const body = {
            amount,
         };
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/transaction/top-up`, body, config);
         setMsg(result.data.msg);
         // setIsLoading(true);
         setRedirectUrl(result.data.data.redirectUrl);
         setIsSuccess(true);
      } catch (error) {
         console.log(error);
      }
      // setIsLoading(false);
   };

   const handleLogout = async () => {
      try {
         const config = { headers: { Authorization: `Bearer ${token}` } };
         const result = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/auth/logout`, config);
         dispatch(logoutAuthAction());
         dispatch(deleteUserInfoAction());
         router.push('/');
         setIsLoading(true);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
      setIsLoading(false);
   };

   return (
      <>
         {isLoading && <Loading />}
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
                  <Link href="/transfer">
                     <div className={props.isActive === 'transfer' ? styles.dashboardActive : styles.dashboard}>Transfer</div>
                  </Link>
               </div>
               <div className={styles.main}>
                  <PlusLg height={30} width={30} />
                  <div className={props.isActive === 'topup' ? styles.dashboardActive : styles.dashboard} onClick={handleShow}>
                     Top Up
                  </div>
               </div>
               <div className={styles.main}>
                  <Person height={30} width={30} />
                  <Link href="/profile">
                     <div className={props.isActive === 'profile' ? styles.dashboardActive : styles.dashboard}>Profile</div>
                  </Link>
               </div>
               <div className={styles.mainlogout}>
                  <BoxArrowRight height={30} width={30} />
                  <div className={props.isActive === 'logout' ? styles.dashboardActive : styles.dashboard} onClick={() => setShowLogout(true)}>
                     Logout
                  </div>
               </div>
            </div>
         </section>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Topup</Modal.Title>
            </Modal.Header>
            <Form.Group>
               <Modal.Body>
                  {isSuccess ? (
                     <></>
                  ) : (
                     <>
                        Enter the amount of money, and click submit
                        <Form.Control type="text" placeholder="Enter your topup" value={amount} onChange={(e) => setAmount(e.target.value)} />
                     </>
                  )}
               </Modal.Body>
            </Form.Group>
            <Modal.Footer>
               {isSuccess ? (
                  <>
                     <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                     </Button>
                     <Button variant="primary" onClick={() => setShow(false)}>
                        <Link href={redirectUrl}>
                           <a target="_blank">Pay</a>
                        </Link>
                     </Button>
                  </>
               ) : (
                  <Button variant="primary" onClick={handleTopup}>
                     Submit
                  </Button>
               )}
            </Modal.Footer>
         </Modal>
         <Modal show={showLogout} onHide={() => setShowLogout(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Log Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are You Sure?</Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleLogout}>
                  Log Out
               </Button>
               <Button variant="secondary" onClick={() => setShowLogout(false)}>
                  Cancel
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
