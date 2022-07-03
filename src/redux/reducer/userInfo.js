import { userInfo, logoutAuth, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   userInfo: {},
   isLoading: false,
   err: false,
};

const userInfoReducer = (state = initialState, action) => {
   switch (action.type) {
      case userInfo + PENDING:
         return { ...state, isLoading: true };
      case userInfo + FULFILLED:
         return { ...state, userInfo: action.payload.data.data, isLoading: false };
      case userInfo + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      case logoutAuth:
         return initialState;
      default:
         return state;
   }
};

export default userInfoReducer;
