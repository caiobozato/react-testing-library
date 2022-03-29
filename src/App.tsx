import { useState } from "react";
import "./App.css";

export function addSpacesCamelCase(word: string) {
  return word.replace(/\B([A-Z])\B/g, " $1");
}

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
