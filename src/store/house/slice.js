import { createSlice } from "@reduxjs/toolkit";

const genre = ["chill out", "rock", "lounge"];

const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: {
    genre: ["chill out", "rock", "lounge"],
    power: false,
  },
  thermostat: 20,
};

export const house = createSlice({
  name: "house",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = house.actions;

export default house.reducer;
