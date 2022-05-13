export const selectLamps = (reduxState) => reduxState.houseReducer.lamps;

export const selectToggleRadio = (reduxState) =>
  reduxState.houseReducer.radio.power;

export const selectRadioGenre = (reduxState) =>
  reduxState.houseReducer.radio.genre;

export const selectThermostat = (reduxState) =>
  reduxState.houseReducer.thermostat;

export const selectlampsPower = (lamps) => {
  const lampsStatusList = Object.values(lamps);
  const numberOfWorkingLamps = lampsStatusList.reduce(
    (previousValue, currentValue) => previousValue + (currentValue ? 25 : 0),
    0
  );
  const lampsTotal = numberOfWorkingLamps * 4;

  return lampsTotal;
};

export const selectRadioPower = (radio) => {
  return radio.power ? 25 : 0;
};

export const selectThermostatPower = (thermostat) => {
  return (thermostat - 20) * 10;
};

export const selectTotalPower = (reduxState) => {
  const { lamps, radio, thermostat } = reduxState.houseReducer;

  const lampsPower = selectlampsPower(lamps);
  const radioPower = selectRadioPower(radio);
  const thermostatPower = selectThermostatPower(thermostat);
  return lampsPower + radioPower + thermostatPower;
};
