import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./house/slice";

const store = configureStore({
  reducer: {
    houseReducer,
  },
});

export default store;
