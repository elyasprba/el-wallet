import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_HOST;

export const authRegisterAxios = (body) => {
   const URL = `${BASE_URL}/auth/register`;
   return axios.post(URL, body);
};

export const authLoginAxios = (body) => {
   const URL = `${BASE_URL}/auth/login`;
   return axios.post(URL, body);
};

export const authLogoutAxios = () => {
   const URL = `${BASE_URL}/auth/logout`;
   return axios.post(URL);
};
