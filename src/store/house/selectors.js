export const selectLamps = (reduxState) => reduxState.houseReducer.lamps;

export const selectToggleRadio = (reduxState) =>
  reduxState.houseReducer.radio.power;

export const selectRadioGenre = (reduxState) =>
  reduxState.houseReducer.radio.genre;

export const selectThermostat = (reduxState) =>
  reduxState.houseReducer.thermostat;
