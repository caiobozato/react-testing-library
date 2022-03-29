import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  function changeColor() {
    const newColor = color === "red" ? "blue" : "red";
    setColor(newColor);
  }

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : color }}
        onClick={changeColor}
      >
        Change to {color === "red" ? "blue" : "red"}
      </button>
      <input
        id="disable-button"
        type="checkbox"
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
