import { configureStore } from '@reduxjs/toolkit'; 
import logger from 'redux-logger'; 
import sessionSlice from './sessionSlice';

const store = configureStore({ 
    reducer: {
        session: sessionSlice,
    }, 
    middleware: (getDefaultMiddleware) => {
        return process.env.NODE_ENV === 'production'
            ? getDefaultMiddleware()
            : getDefaultMiddleware().concat(logger)
    }, 
}); 

export default store;
