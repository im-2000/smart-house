import { useDispatch, useSelector } from "react-redux";
import {
  increaseThermostat,
  decreaseThermostat,
} from "../../store/house/slice";
import { selectThermostat } from "../../store/house/selectors";

export const Thermostat = () => {
  const dispatch = useDispatch();
  const thermostat = useSelector(selectThermostat);

  return (
    <div className="thermostat">
      <button onClick={() => dispatch(increaseThermostat())}>+</button>
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
