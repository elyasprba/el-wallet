import { registerAuth, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   registerData: {},
   isLoading: false,
   err: false,
   msg: '',
};

const registerReducer = (state = initialState, action) => {
   switch (action.type) {
      case registerAuth + PENDING:
         return { ...state, isLoading: true };
      case registerAuth + FULFILLED:
         return { ...state, registerData: action.payload, isLoading: false };
      case registerAuth + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      default:
         return state;
   }
};

export default registerReducer;
