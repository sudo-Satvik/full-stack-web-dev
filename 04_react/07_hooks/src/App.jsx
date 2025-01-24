import "./App.css";
import { useState } from "react";

const App = () => {
  // let val = 0;

  // Responsible for changing the state in the ui

  let [val, setCounter] = useState(0);

  const addValue = () => {
    setCounter(val +   1);
  };

  const removeValue = () => {
    if (val === 0) return;
    setCounter(val - 1);
  };

  return (
    <>
      <h1>Satvik is the King</h1>
      <h3>Click count: {val}</h3>
      <div className="flex">
        <button onClick={addValue}>➕</button>
        <button onClick={removeValue}>➖</button>
      </div>
    </>
  );
};  

export default App;
