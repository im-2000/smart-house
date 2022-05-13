import "./dashboard.css";
import { Lamps, Radio, Thermostat } from "../index";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h3>Total power: </h3>
      <h4>*** Lamps *** </h4>
      <Lamps />
      <h4>*** Radio ***</h4>
      <Radio />
      <h4> *** Thermostat *** </h4>
      <Thermostat />
    </div>
  );
};
