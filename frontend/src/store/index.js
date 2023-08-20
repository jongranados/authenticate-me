import { configureStore } from '@reduxjs/toolkit'; 
import sessionSlice from './sessionSlice';

const store = configureStore({ 
    reducer: {
        session: sessionSlice,
    }, 
    middleware: (getDefaultMiddleware) => {
        if (process.env.NODE_ENV === 'production') {
            return getDefaultMiddleware(); 
        } else { 
            const logger = require('redux-logger'); 
            return getDefaultMiddleware().concat(logger);
        }
    }, 
}); 

export default store;
