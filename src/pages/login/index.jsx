import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';
import { Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';
import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import Link from 'next/link';
import { loginAuthAction } from '../../redux/actionCreator/login';
import Loading from '../../components/Loading';
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Signup() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPass, setShowPass] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [errorMsg, setErrorMsg] = useState('');
   const [isSuccess, setIsSuccess] = useState(false);
   const [show, setShow] = useState(false);

   const router = useRouter();
   const dispatch = useDispatch();

   const login = () => {
      const body = {
         email,
         password,
      };
      dispatch(loginAuthAction(body))
         .then((_) => {
            // console.log(result.value.data.msg);
            setIsLoading(true);
            // setIsSuccess(true);
            router.push('/home');
         })
         .catch((error) => {
            // console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
            setIsLoading(false);
            if (!isSuccess) {
               router.push('/login');
            }
            setShow(true);
         });
      setIsLoading(false);
   };

   return (
      <>
         {isLoading && <Loading />}
         <Layout title="Login" />
         <section className={styles.container}>
            <Aside />
            <main className={styles.maincontainer}>
               <p className={styles.maintitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
               <p className={styles.desctitle}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
               <div className="register-form-sign">
                  <div className={styles.inputname}>
                     <Envelope height={30} width={30} />
                     <input
                        type="text"
                        id="name"
                        placeholder="Enter your e-mail"
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                     />
                  </div>
                  <div className={styles.inputname}>
                     <Lock height={27} width={30} />
                     <input
                        type={`${showPass ? 'text' : 'password'}`}
                        id="name"
                        placeholder="Enter your password"
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                     />
                     <div
                        className="icons-eye"
                        value={showPass}
                        onClick={() => {
                           setShowPass(!showPass);
                        }}
                     >
                        {showPass ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                     </div>
                  </div>
                  <div>
                     <Link href="/forgot">
                        <p className={styles.forgotpassword}>Forgot password?</p>
                     </Link>
                  </div>
                  <button className={styles.signupbutton} onClick={login}>
                     Login
                  </button>
               </div>
               <p className={styles.descsignup}>
                  Don???t have an account? Let???s <Link href="/signup">Sign Up</Link>
               </p>
            </main>
         </section>
         <Modal show={show} onHide={() => setShowPass(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>{isSuccess ? <></> : `${errorMsg}`}</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
