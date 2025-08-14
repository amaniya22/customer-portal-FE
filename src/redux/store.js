import { configureStore } from "@reduxjs/toolkit";
import userAuthSliceReducer from './slices/userAuthSlice.js';
import productSliceReducer from "./slices/productSlice.js";

const store = configureStore({
    reducer: {
        userAuth: userAuthSliceReducer,
        products: productSliceReducer,
    }
})

export default store;