import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import reducers from '../redux/reducer/index';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['loginReducer', 'registerReducer', 'userInfoReducer'],
};

// const reducers = {
//    register: registerReducer,
// };

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger();
const middlewares = applyMiddleware(rpm, logger);

export const store = createStore(persistedReducer, middlewares);
export const persistor = persistStore(store);
