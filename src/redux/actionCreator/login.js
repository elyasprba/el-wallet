import { authLoginAxios } from '../../service/auth';
import { loginAuth, logoutAuth } from './actionString';

export const loginAuthAction = (body) => {
   return {
      type: loginAuth,
      payload: authLoginAxios(body),
   };
};

export const logoutAuthAction = () => {
   return {
      type: logoutAuth,
   };
};
