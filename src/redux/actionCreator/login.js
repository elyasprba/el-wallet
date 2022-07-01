import { authLoginAxios } from '../../service/auth';
import { loginAuth } from './actionString';

export const loginAuthAction = (body) => {
   return {
      type: loginAuth,
      payload: authLoginAxios(body),
   };
};
