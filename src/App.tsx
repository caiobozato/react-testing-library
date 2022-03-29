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
        style={{ backgroundColor: color }}
        onClick={changeColor}
      >
        Change to {color === "red" ? "blue" : "red"}
      </button>
      <input type="checkbox" onClick={() => setDisabled(!disabled)} />
    </div>
  );
}

export default App;
