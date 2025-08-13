import { configureStore } from "@reduxjs/toolkit";
import userAuthSliceReducer from './slices/userAuthSlice.js';

const store = configureStore({
    reducer: userAuthSliceReducer
})

export default store;