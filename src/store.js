import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from './features/teachers/teachersSlice';
import roleReducer from './features/subAdmin/createRoleSlice';
import loginReducer from './features/auth/loginSlice';

export const store = configureStore({
    reducer:{
        teachers:teachersReducer,
        role:roleReducer,
        auth:loginReducer,
    }
})