import { registerAuth, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   registerData: {},
   userInfo: {},
   isLoading: false,
   isLoggedIn: false,
   err: false,
};

const registerReducer = (state = initialState, action) => {
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
