import { loginAuth, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   loginData: {},
   userInfo: {},
   isLoading: false,
   isLoggedIn: false,
   err: false,
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case loginAuth + PENDING:
         return { ...state, isLoading: true };
      case loginAuth + FULFILLED:
         return { ...state, loginData: action.payload.data.data, isLoading: false };
      case loginAuth + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      default:
         return state;
   }
};

export default loginReducer;
