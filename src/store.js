import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PURGE, REGISTER, PERSIST, PAUSE, REHYDRATE, FLUSH } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import loginReducer from "./features/auth/loginSlice";
import teachersReducer from "./features/teachers/teachersSlice";
import roleReducer from "./features/subAdmin/createRoleSlice";
import classroomReducer from "./features/subAdmin/classroomSlice";
import sectionReducer from "./features/subAdmin/sectionSlice";
import localStorage from "redux-persist/es/storage";

// 2. Combine reducers
const rootReducer = combineReducers({
  auth: loginReducer,
  teachers: teachersReducer,
  role: roleReducer,
  classroom: classroomReducer,
  section: sectionReducer,
});


// 1. Persist config
const persistConfig = {
    key: "root",
    storage:localStorage,
    whitelist: ["auth"], // persist only auth (recommended)
};


// 3. Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, // required for redux-persist
    }),
});

// 5. Create persistor
export const persistor = persistStore(store);

// router.post("/sub-admin/classroom/create");
// router.get("/sub-admin/classroom");
// router.get("/sub-admin/classroom/:id");
// router.put("/sub-admin/classroom/:id");
// router.delete("/sub-admin/classroom/:id");