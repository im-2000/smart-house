import "./dashboard.css";
import { Lamps, Radio, Thermostat } from "../index";
import { useSelector } from "react-redux";
import { selectTotalPower } from "../../store/house/selectors";

export const Dashboard = () => {
  const power = useSelector(selectTotalPower);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h3>Total power: {power} </h3>
      <h4>*** Lamps *** </h4>
      <Lamps />
      <h4>*** Radio ***</h4>
      <Radio />
      <h4> *** Thermostat *** </h4>
      <Thermostat />
    </div>
  );
};
