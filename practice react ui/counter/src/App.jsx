import { useState, useEffect, useRef } from "react";

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
  // const isFirstRender = useRef(true);
  const LIMIT_COUNT = 10  ;

  // Add to history whenever value changes
  // useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
  //   setHistory(prev => [...prev, value]);
  // }, [value]);

  // 👇 this effect runs whenever history changes
  useEffect(() => {

    setHistory(prev => [...prev, value]);
  }, [value]);
  
  useEffect(() => {
    if (history.length === LIMIT_COUNT) {
      alert(`You have entered ${LIMIT_COUNT} counts — now come back later`);
      return ;
    }
  }, [history]);

  function handleAddition() {
    setValue(prev => prev + 1);
  }

  function handleSubtraction() {
    if(value <= 1){
      // value = 0;
      alert('you are going for negative numbers');
      return ;
    }
    setValue(prev => prev - 1);
  }

  function reset() {
    setValue(0);
  }

  function handleDoubleValue() {
    setValue(prev => prev * 2);
  }

  return (
    <>
      <div className="actionButton">
        <ActionButton label={"Addition +"} onClick={handleAddition} disabled={history.length >= LIMIT_COUNT} />
        <ActionButton
          label={"Subtraction -"}
          onClick={handleSubtraction}
          disabled={value <= 0 || history.length >= LIMIT_COUNT }
        />
        <ActionButton label={"Double The Value"} onClick={handleDoubleValue} disabled={history.length >= LIMIT_COUNT} />
        <ActionButton label={"Reset"} onClick={reset}  disabled={history.length >= LIMIT_COUNT} />
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
