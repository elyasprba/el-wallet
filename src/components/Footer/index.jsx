import style from './footer.module.css';

export default function Footer() {
   return (
      <>
         <section className={style.container}>
            <div className={style.mainRight}>
               <p className={style.copyright}>2022 el-wallet. All right reserved.</p>
            </div>
            <div className={style.mainLeft}>
               <p className={style.phonenumber}>+62 5637 8882 9901</p>
               <p className={style.email}>contact@el-wallet.com</p>
            </div>
         </section>
      </>
   );
}
