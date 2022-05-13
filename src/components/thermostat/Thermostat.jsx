import { useDispatch, useSelector } from "react-redux";
import {
  increaseThermostat,
  decreaseThermostat,
} from "../../store/house/slice";
import {
  selectThermostat,
  selectThermostatPower,
  selectRadioPower,
  selectlampsPower,
} from "../../store/house/selectors";

export const Thermostat = () => {
  const dispatch = useDispatch();
  const thermostat = useSelector(selectThermostat);
  const thermostatPower = useSelector(selectThermostatPower);
  const radioPower = useSelector(selectRadioPower);
  const lampsPower = useSelector(selectlampsPower);

  return (
    <div className="thermostat">
      <button
        disabled={lampsPower + radioPower + thermostatPower > 100}
        onClick={() => dispatch(increaseThermostat())}
      >
        +
      </button>

      <div>Thermostat power = {thermostat}</div>
      <button
        disabled={thermostat === 0}
        onClick={() => dispatch(decreaseThermostat())}
      >
        -
      </button>
    </div>
  );
};
