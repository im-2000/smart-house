import axios from "axios";
import {
  signupNewUser,
  startLoading,
  saveLoginData,
  logout,
  saveHouse,
} from "./slice";

const API_URL = "https://redux-assessement.herokuapp.com/";

export const login =
  (username, password, navigate) => async (dispatch, getState) => {
    try {
      // dispatch => set loading to true
      dispatch(startLoading());

      // Make POST to /login
      const response = axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });

      const token = response.data.jwt;

      const profileResponse = axios.get(`${API_URL}/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      navigate("/");

      console.log("me response", profileResponse.data);

      dispatch(saveLoginData({ token, user: profileResponse.data }));
    } catch (e) {
      console.log(e.message);
    }
  };

export const fetchHouse = () => async (dispatch, getState) => {
  try {
    // 1. set loading to true
    dispatch(startLoading());
    // 2. fetch from API (axios)
    const response = await axios.get(`${API_URL}/house`);

    const house = response.data.rows;
    // 3. send data to store
    dispatch(saveHouse(house));
  } catch (e) {
    console.log(e.message);
    // stopLoading
    // setError
  }
};
