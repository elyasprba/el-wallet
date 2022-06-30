import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import registerReducer from './reducer/register';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['user'],
   blacklist: ['helpers'],
};

const reducers = {
   register: registerReducer,
};

const persistedReducer = persistReducer(reducers, persistConfig);

const logger = createLogger();
const middlewares = applyMiddleware(rpm, logger);

export const store = createStore(persistedReducer, middlewares);
export const persistor = persistStore(store);
