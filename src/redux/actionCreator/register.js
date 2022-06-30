import { authRegisterAxios } from '../../service/auth';
import { registerAuth } from './actionString';

export const registerAuthAction = (body) => {
   return {
      type: registerAuth,
      payload: authRegisterAxios(body),
   };
};
