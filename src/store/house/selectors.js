export const selectLamps = (reduxState) => reduxState.houseReducer.lamps;

export const selectToggleRadio = (reduxState) =>
  reduxState.houseReducer.radio.power;

export const selectRadioGenre = (reduxState) =>
  reduxState.houseReducer.radio.genre;

export const selectThermostat = (reduxState) =>
  reduxState.houseReducer.thermostat;

const calculatelampsPower = (lamps) => {
  const lampsStatusList = Object.values(lamps);
  const numberOfWorkingLamps = lampsStatusList.reduce(
    (previousValue, currentValue) => previousValue + (currentValue ? 25 : 0),
    0
  );
  const lampsTotal = numberOfWorkingLamps * 4;

  return lampsTotal;
};

const calculateRadioPower = (radio) => {
  return radio.power ? 25 : 0;
};

const calculateThermostatPower = (thermostat) => {
  return (thermostat - 20) * 10;
};

export const selectTotalPower = (reduxState) => {
  const { lamps, radio, thermostat } = reduxState.houseReducer;

  const lampsPower = calculatelampsPower(lamps);
  const radioPower = calculateRadioPower(radio);
  const thermostatPower = calculateThermostatPower(thermostat);
  return lampsPower + radioPower + thermostatPower;
};
