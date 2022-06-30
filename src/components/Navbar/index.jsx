import style from './navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
   return (
      <>
         <div>
            <div className={style.navbar}>
               <div>
                  <div className={style.navbarTitle}>el-Wallet</div>
               </div>
               <div className={style.navbarInfoUser}>
                  <div className={style.navbarImage}>
                     <Image src={require('../../assets/img.png')} alt="img" width={40} height={40} />
                  </div>
                  <div className={style.nameInfo}>
                     <p className={style.nameUser}>Robert Chandler</p>
                     <p className={style.nameNumber}>+62 8139 3877 7946</p>
                  </div>
                  <div>
                     <Image src={require('../../assets/vector/bel.png')} alt="img" width={30} height={30} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
