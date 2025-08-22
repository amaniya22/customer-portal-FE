import { configureStore } from "@reduxjs/toolkit";
import userAuthSliceReducer from './slices/userAuthSlice.js';
import productSliceReducer from "./slices/productSlice.js";
import feedbackSliceReducer from "./slices/feedbackSlice.js";

const store = configureStore({
    reducer: {
        userAuth: userAuthSliceReducer,
        products: productSliceReducer,
        feedback: feedbackSliceReducer,
    }
})

export default store;