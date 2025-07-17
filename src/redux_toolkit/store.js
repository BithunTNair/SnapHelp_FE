import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import loaderReducer from './generalSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        loader:loaderReducer
    }
});
export default store;