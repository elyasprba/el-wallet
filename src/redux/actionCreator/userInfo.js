// import { getUserIdAxios } from '../../service/auth';
import { userInfo, deleteUserInfo } from './actionString';
import axios from 'axios';

export const getUserbyIdAction = (id, token) => {
   const config = { headers: { Authorization: `Bearer ${token}` } };
   return {
      type: userInfo,
      payload: axios.get(`https://fazzpay.herokuapp.com/user/profile/${id}`, config),
   };
};

export const deleteUserInfoAction = () => {
   return {
      type: deleteUserInfo,
   };
};
