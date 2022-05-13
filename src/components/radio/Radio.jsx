import "./radio.css";

export const Radio = () => {
  return (
    <div className="radio-container">
      <select>
        <option>Chill Out</option>
        <option>Rock</option>
        <option>Lounge</option>
      </select>
      <button>On|Off</button>
    </div>
  );
};
