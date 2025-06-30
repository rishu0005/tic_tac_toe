import { useState } from "react";

function ShowCalculation({ value }) {
  return <h1>{value}</h1>;
}

function ActionButton({ label, onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default function App() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const LIMIT_COUNT = 10;

  const isLimitReached = history.length >= LIMIT_COUNT;

  function addToHistory(newValue) {
    if (history.length < LIMIT_COUNT) {
      setHistory(prev => [...prev, newValue]);
    }
  }

  function handleAddition() {
    const newVal = value + 1;
    setValue(newVal);
    addToHistory(newVal);
  }

  function handleSubtraction() {
    if (value <= 0) {
      alert("You are going for negative numbers!");
      return;
    }
    const newVal = value - 1;
    setValue(newVal);
    addToHistory(newVal);
  }

  function handleDoubleValue() {
    const newVal = value * 2;
    setValue(newVal);
    addToHistory(newVal);
  }

  function handleReset() {
    setValue(0);
    addToHistory(0);
  }

  // Optional: you can alert when limit is hit
  if (history.length === LIMIT_COUNT) {
    alert(`You have entered ${LIMIT_COUNT} counts — now come back later`);
  }

  return (
    <>
      <div className="actionButton">
        <ActionButton label="Addition +" onClick={handleAddition} disabled={isLimitReached} />
        <ActionButton
          label="Subtraction -"
          onClick={handleSubtraction}
          disabled={value <= 0 || isLimitReached}
        />
        <ActionButton label="Double The Value" onClick={handleDoubleValue} disabled={isLimitReached} />
        <ActionButton label="Reset" onClick={handleReset} disabled={isLimitReached} />
      </div>

      <ShowCalculation value={value} />

      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>Value: {item}</li>
        ))}
      </ul>
    </>
  );
}
