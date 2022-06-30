import Layout from '../components/Layout';
import style from '../styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

export default function Home() {
   return (
      <>
         <Layout title="Home" />
         <section className={style.container}>
            <section className={style.maincontentone}>
               <navbar className={style.navbar}>
                  <div>
                     <p className={style.title}>el-wallet</p>
                  </div>
                  <div className={style.clickbutton}>
                     <Link href="/auth">
                        <button className={style.login}>Login</button>
                     </Link>
                     <button className={style.login}>Sign Up</button>
                  </div>
               </navbar>
               <section className={style.maincontentinfo}>
                  <h3 className={style.titlecontainer}>
                     Awesome App For <br /> Saving Time.
                  </h3>
                  <p className={style.descontainer}>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                  <br />
                  <button className={style.titletryfree}>Try It Free</button>
               </section>
            </section>
            <main className={style.maincontectinformation}>
               <section className={style.maininfo}>
                  <h1 className={style.titleinfo}>Why Choose el-wallet?</h1>
                  <p className={style.descinformation}>We have some great features from the application and it’s totally free to use by all users around the world.</p>
               </section>
               <section className={style.datainformation}>
                  <div className={style.contentinformation}>
                     <Image src={require('../assets/vector/phone.png')} alt="img" width={60} height={60} />
                     <h3 className={style.supportinformationcontact}>24/7 Support</h3>
                     <p className={style.supportinformation}>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                  </div>
                  <div className={style.contentinformation}>
                     <Image src={require('../assets/vector/private.png')} alt="img" width={60} height={60} />
                     <h3 className={style.supportinformationcontact}>Data Privacy</h3>
                     <p className={style.supportinformation}>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                  </div>
                  <div className={style.contentinformation}>
                     <Image src={require('../assets/vector/download.png')} alt="img" width={60} height={60} />
                     <h3 className={style.supportinformationcontact}>Easy Download</h3>
                     <p className={style.supportinformation}>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                  </div>
               </section>
            </main>
            <section>
               <Image src={require('../assets/vector/sponsor.png')} alt="img-sponsor" />
            </section>
            <section className={style.containerprice}>
               <button className={style.buttonprice}>
                  <h1 className={style.price}>Rp. 390.736.500</h1>
               </button>
               <h1 className={style.titleinfoprice}>Money has Been Transfered.</h1>
               <p className={style.descinfoprice}>That amount of money has been transfered from all users. We still counting and going strong!</p>
            </section>
            <section className={style.containerfeatures}>
               <section className={style.righfeatures}>
                  <Image src={require('../assets/background/feature.png')} alt="img-feature" className={style.imagepict} />
               </section>
               <section className={style.leftfeatures}>
                  <h1 className={style.titlefeatures}>All The Great FazzPay Features.</h1>
                  <div className={style.featureinfo}>
                     <p className={style.featureinfodetail}>1. Small Fee</p>
                     <p className={style.featureinfodesc}>We only charge 5% of every success transaction done in FazzPay app.</p>
                  </div>
                  <div className={style.featureinfo}>
                     <p className={style.featureinfodetail}>1. Small Fee</p>
                     <p className={style.featureinfodesc}>We only charge 5% of every success transaction done in FazzPay app.</p>
                  </div>
                  <div className={style.featureinfo}>
                     <p className={style.featureinfodetail}>1. Small Fee</p>
                     <p className={style.featureinfodesc}>We only charge 5% of every success transaction done in FazzPay app.</p>
                  </div>
               </section>
            </section>
            <section className={style.containreview}>
               <h1 className={style.titlereview}>What Users are Saying.</h1>
               <p className={style.descreview}>We have some great features from the application and it’s totally free to use by all users around the world.</p>
               <div className={style.cardreview}>
                  {/* <ArrowLeftCircle size={50} /> */}
                  <div className={style.cardcontainreview}>
                     <Image src={require('../assets/review.png')} alt="img-feature" width={100} height={100} />
                     <h3 className={style.namereview} s>
                        Alex Hansinburg
                     </h3>
                     <p className={style.jobreview}>Designer</p>
                     <p className={style.descreviewuser}>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                  </div>
                  {/* <ArrowRightCircle size={50} /> */}
               </div>
            </section>
         </section>
         <footer className={style.footercontainer}>
            <div className={style.mainfooter}>
               <h1>el-wallet</h1>
               <p className={style.descfooter}>Simplify financial needs and saving much time in banking needs with one single app.</p>
            </div>
            <div className={style.secondfooter}>
               <p className={style.copyright}>2022 el-wallet. All right reserved.</p>
               <div className={style.rightfooter}>
                  <p className={style.phonefooter}>+62 5637 8882 9901</p>
                  <p className={style.emailfooter}>contact@fazzpay.com</p>
               </div>
            </div>
         </footer>
      </>
   );
}
