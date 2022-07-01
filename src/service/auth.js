import axios from 'axios';

const BASE_URL = 'https://fazzpay.herokuapp.com/auth';

export const authRegisterAxios = (body) => {
   const URL = `${BASE_URL}/register`;
   return axios.post(URL, body);
};

export const authLoginAxios = (body) => {
   const URL = `${BASE_URL}/login`;
   return axios.post(URL, body);
};
