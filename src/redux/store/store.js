import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { userReducer } from "../reducers/userReducer";

const persistConfig = {
  storage: localStorage,
  key: "user",
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
