import { useDispatch, useSelector } from "react-redux";
import {
  increaseThermostat,
  decreaseThermostat,
} from "../../store/house/slice";
import { selectThermostat } from "../../store/house/selectors";

export const Thermostat = (power) => {
  const dispatch = useDispatch();
  const thermostat = useSelector(selectThermostat);

  console.log("power", power);
  return (
    <div className="thermostat">
      <button
        disabled={power.power >= 100}
        onClick={() => dispatch(increaseThermostat())}
      >
        +
      </button>

      <div>Thermostat power = {thermostat}</div>
      <button
        disabled={thermostat === 20}
        onClick={() => dispatch(decreaseThermostat())}
      >
        -
      </button>
    </div>
  );
};
