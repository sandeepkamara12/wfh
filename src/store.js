import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import teachersReducer from "./features/teachers/teachersSlice";
import roleReducer from "./features/subAdmin/createRoleSlice";
import loginReducer from "./features/auth/loginSlice";
import localStorage from "redux-persist/es/storage";

// 1. Persist config
const persistConfig = {
    key: "root",
    storage:localStorage,
    whitelist: ["auth"], // persist only auth (recommended)
};

// 2. Combine reducers
const rootReducer = combineReducers({
  teachers: teachersReducer,
  role: roleReducer,
  auth: loginReducer,
});

// 3. Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      }, // required for redux-persist
    }),
});

// 5. Create persistor
export const persistor = persistStore(store);
