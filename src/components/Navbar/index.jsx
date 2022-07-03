import style from './navbar.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserbyIdAction } from '../../redux/actionCreator/userInfo';
import Loading from '../Loading';

export default function Navbar() {
   const id = useSelector((state) => state.loginReducer.loginData.id);
   const token = useSelector((state) => state.loginReducer.loginData.token);
   const firstName = useSelector((state) => state.userInfoReducer.userInfo.firstName);
   const lastName = useSelector((state) => state.userInfoReducer.userInfo.lastName);
   const noTelp = useSelector((state) => state.userInfoReducer.userInfo.noTelp);
   const [isLoading, setIsLoading] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserbyIdAction(id, token));
   }, []);

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
                     <p className={style.nameUser}>{`${firstName ? firstName : 'tes'} ${lastName ? lastName : 'tes'}`}</p>
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
