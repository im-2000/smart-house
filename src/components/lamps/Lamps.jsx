import "./lamps.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLamps } from "../../store/house/slice";
import { selectLamps } from "../../store/house/selectors";

export const Lamps = (power) => {
  const dispatch = useDispatch();
  const lamps = useSelector(selectLamps);

  return (
    <div className="button-container">
      <button
        disabled={!lamps[0] && power.power + 25 > 100}
        onClick={() => {
          dispatch(toggleLamps("0"));
        }}
      >
        Turn Lamp 1 {lamps[0] ? "OFF" : "ON"}
      </button>
      <button
        disabled={!lamps[1] && power.power + 25 > 100}
        onClick={() => {
          dispatch(toggleLamps("1"));
        }}
      >
        Turn Lamp 2 {lamps[1] ? "OFF" : "ON"}
      </button>
      <button
        disabled={!lamps[2] && power.power + 25 > 100}
        onClick={() => {
          dispatch(toggleLamps("2"));
        }}
      >
        Turn Lamp 3 {lamps[2] ? "OFF" : "ON"}
      </button>
      <button
        disabled={!lamps[3] && power.power + 25 > 100}
        onClick={() => {
          dispatch(toggleLamps("3"));
        }}
      >
        Turn Lamp 4 {lamps[3] ? "OFF" : "ON"}
      </button>
    </div>
  );
};
