import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { userReducer } from "../reducers/userReducer";
import { postsReducer } from "../reducers/postsReducer";
import { commentsReducer } from "../reducers/commentsReducer";

const persistConfig = {
  storage: localStorage,
  key: "user",
  whitelist: ["user"],
};

const mainReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
