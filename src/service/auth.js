import axios from 'axios';

const BASE_URL = 'https://fazzpay.herokuapp.com';

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

// export const getUserIdAxios = (id, token) => {
//    const res = config(token);
//    const URL = `${BASE_URL}/user/profile/${id}`;
//    return axios.get(URL, res);
// };
