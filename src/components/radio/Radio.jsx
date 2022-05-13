import "./radio.css";
import {
  selectToggleRadio,
  selectRadioGenre,
} from "../../store/house/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setRadioGenre, toggleRadio } from "../../store/house/slice";
import { radioGenre } from "../../store/house/slice";

export const Radio = () => {
  const dispatch = useDispatch();

  const radioToggle = useSelector(selectToggleRadio);
  const currentRadioGenre = useSelector(selectRadioGenre);
  console.log("radio genre", currentRadioGenre);

  return (
    <div className="radio-container">
      <select
        onChange={(event) => dispatch(setRadioGenre(event.target.value))}
        value={radioGenre.indexOf(currentRadioGenre)}
      >
        <option value={0}>chill out</option>
        <option value={1}>classic rock</option>
        <option value={2}>lounge</option>
      </select>
      <button
        onClick={() => {
          dispatch(toggleRadio("power"));
          dispatch(setRadioGenre(1));
        }}
      >
        Radio Turn {radioToggle ? "OFF" : "ON"}
      </button>
    </div>
  );
};
