import "./radio.css";
import { selectToggleRadio } from "../../store/house/selectors";
import { toggleRadio } from "../../store/house/slice";
import { useDispatch, useSelector } from "react-redux";

export const Radio = () => {
  const dispatch = useDispatch();

  const radioToggle = useSelector(selectToggleRadio);

  return (
    <div className="radio-container">
      <select>
        <option>Chill Out</option>
        <option>Rock</option>
        <option>Lounge</option>
      </select>
      <button
        onClick={() => {
          dispatch(toggleRadio("power"));
        }}
      >
        Radio Turn {radioToggle.power ? "OFF" : "ON"}
      </button>
    </div>
  );
};
