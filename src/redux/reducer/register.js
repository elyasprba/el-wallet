import { registerAuth, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const intialSatate = {
   registerData: {},
   userInfo: {},
   isLoading: false,
   isLoggedIn: false,
   err: null,
};

const registerReducer = (state = intialSatate, action) => {
   switch (action.type) {
      case registerAuth + PENDING:
         return { ...state, isLoading: true };
      case registerAuth + FULFILLED:
         return { ...state, registerData: action.payload.data.data, isLoading: false };
      case registerAuth + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      default:
         return state;
   }
};

export default registerReducer;
