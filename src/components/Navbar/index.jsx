import style from './navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

export default function Navbar() {
   const firstName = useSelector((state) => state.userInfoReducer.userInfo.firstName);
   const lastName = useSelector((state) => state.userInfoReducer.userInfo.lastName);
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const [isLoading, setIsLoading] = useState(false);

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
                     <h1 className={style.nameUser}>
                        {firstName || 'TES'} {lastName || 'TES'}
                     </h1>
                     <p className={style.nameNumber}>{`${noTelp ? noTelp : 'tes'}`}</p>
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
