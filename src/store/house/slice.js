import { createSlice } from "@reduxjs/toolkit";

export const radioGenre = ["chill out", "classic rock", "lounge"];

const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: {
    genre: "classic rock",
    power: false,
  },
  thermostat: 20,
};

export const house = createSlice({
  name: "house",
  initialState,
  reducers: {
    toggleLamps: (state, action) => {
      state.lamps[action.payload] = !state.lamps[action.payload];
    },
    toggleRadio: (state, action) => {
      state.radio.power = !state.radio.power;
    },
    setRadioGenre: (state, action) => {
      state.radio.genre = radioGenre[action.payload];
    },
    increaseThermostat: (state) => {
      state.thermostat = state.thermostat + 5;
    },
    decreaseThermostat: (state) => {
      state.thermostat = state.thermostat - 5;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {
  toggleLamps,
  toggleRadio,
  setRadioGenre,
  increaseThermostat,
  decreaseThermostat,
} = house.actions;

export default house.reducer;
