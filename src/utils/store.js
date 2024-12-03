import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./appSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
