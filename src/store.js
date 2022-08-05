import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./comps/header/headerSlice.js";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});
