import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./house/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    houseReducer,
    authReducer,
  },
});

export default store;
