import { configureStore } from '@reduxjs/toolkit';
import signupUserReducer from './signedupUserslice';
const store = configureStore({
    reducer: {
        signedupUser: signupUserReducer,
        // loggedinUser: loggedinUserReducer
    }
});
export default store;