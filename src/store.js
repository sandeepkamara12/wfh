import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from './features/teachers/teachersSlice';
export const store = configureStore({
    reducer:{
        teachers:teachersReducer,
    }
})