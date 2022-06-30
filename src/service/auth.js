import axios from 'axios';

const BASE_URL = 'https://fazzpay.herokuapp.com/auth/register';

export const authRegisterAxios = (body) => {
   const URL = BASE_URL;
   return axios.post(URL, body);
};
