import "./lamps.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLamps } from "../../store/house/slice";
import { selectLamps } from "../../store/house/selectors";

export const Lamps = () => {
  const dispatch = useDispatch();
  const lamps = useSelector(selectLamps);

  return (
    <div className="button-container">
      <button
        onClick={() => {
          dispatch(toggleLamps("0"));
        }}
      >
        Lamp 1 Turn {lamps[0] ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleLamps("1"));
        }}
      >
        Lamp 2 Turn {lamps[1] ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleLamps("2"));
        }}
      >
        Lamp 3 Turn {lamps[2] ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleLamps("3"));
        }}
      >
        Lamp 4 Turn {lamps[3] ? "OFF" : "ON"}
      </button>
    </div>
  );
};
