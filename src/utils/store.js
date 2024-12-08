import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./appSlice";
import queryReducer from "./querySlice"
import cacheReducer from "./cacheSlice"
import chatReducer from "./chatSlice"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    query: queryReducer,
    cache:cacheReducer,
    chat: chatReducer
  },
});

export default store;
