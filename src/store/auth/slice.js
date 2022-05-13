import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupNewUser: (state, action) => {
      state.user = action.payload.user;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    saveLoginData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      return { ...initialState };
    },
    saveHouse: (state, action) => {
      state.house = [...action.payload];
      state.loading = false;
    },
  },
});

export const { signupNewUser, startLoading, saveLoginData, logout, saveHouse } =
  authSlice.actions;

export default authSlice.reducer;
