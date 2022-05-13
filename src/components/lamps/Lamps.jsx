import "./lamps.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLamps } from "../../store/house/slice";
import {
  selectLamps,
  selectThermostatPower,
  selectRadioPower,
  selectlampsPower,
} from "../../store/house/selectors";

export const Lamps = () => {
  const dispatch = useDispatch();
  const lamps = useSelector(selectLamps);
  const thermostatPower = useSelector(selectThermostatPower);
  const radioPower = useSelector(selectRadioPower);
  const lampsPower = useSelector(selectlampsPower);

  return (
    <div className="button-container">
      <button
        disabled={lampsPower + radioPower + thermostatPower > 100}
        onClick={() => {
          dispatch(toggleLamps("0"));
        }}
      >
        Turn Lamp 1 {lamps[0] ? "OFF" : "ON"}
      </button>
      <button
        disabled={lampsPower + radioPower + thermostatPower > 100}
        onClick={() => {
          dispatch(toggleLamps("1"));
        }}
      >
        Turn Lamp 2 {lamps[1] ? "OFF" : "ON"}
      </button>
      <button
        disabled={lampsPower + radioPower + thermostatPower > 100}
        onClick={() => {
          dispatch(toggleLamps("2"));
        }}
      >
        Turn Lamp 3 {lamps[2] ? "OFF" : "ON"}
      </button>
      <button
        disabled={lampsPower + radioPower + thermostatPower > 100}
        onClick={() => {
          dispatch(toggleLamps("3"));
        }}
      >
        Turn Lamp 4 {lamps[3] ? "OFF" : "ON"}
      </button>
    </div>
  );
};
