import "./radio.css";
import { selectToggleRadio } from "../../store/house/selectors";
// import { toggleRadio } from "../../store/house/slice";
import { useDispatch, useSelector } from "react-redux";
import { setRadioGenre, toggleRadio } from "../../store/house/slice";

export const Radio = () => {
  const dispatch = useDispatch();

  const radioToggle = useSelector(selectToggleRadio);

  return (
    <div className="radio-container">
      <select onChange={(event) => dispatch(setRadioGenre(event.target.value))}>
        <option value={0}>chill out</option>
        <option value={1}>rock</option>
        <option value={2}>lounge</option>
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
