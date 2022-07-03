import { combineReducers } from 'redux';
import registerReducer from './register';
import loginReducer from './login';
import userInfoReducer from './userInfo';

export default combineReducers({
   registerReducer,
   loginReducer,
   userInfoReducer,
});
