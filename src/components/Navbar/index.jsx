import style from './navbar.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Navbar() {
   const selectUserId = useSelector((state) => state.loginReducer.loginData.id);
   const selectTokenId = useSelector((state) => state.loginReducer.loginData.token);
   const [user, setUser] = useState('');

   useEffect(() => {
      const userId = async () => {
         try {
            const config = { headers: { Authorization: `Bearer ${selectTokenId}` } };
            const result = await axios.get(`https://fazzpay.herokuapp.com/user/profile/${selectUserId}`, config);
            setUser(result.data.data);
            console.log(result);
         } catch (error) {
            console.log(error);
         }
      };
      userId();
   }, []);

   console.log(user);

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
                     <p className={style.nameUser}>{`${user.firstName} ${user.lastName}`}</p>
                     <p className={style.nameNumber}>{`${user.noTelp}`}</p>
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
