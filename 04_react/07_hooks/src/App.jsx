import "./App.css";
import { useState } from "react";

const App = () => {
  // let val = 0;

  // Responsible for changing the state in the ui

  let [val, setCounter] = useState(0);

  const addValue = () => {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INTERVIEW ALERT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This won't work as expected, bcz that will incrment only one value as the react took them in the form of the batch update and only update one value
    // setCounter(val + 1);
    // setCounter(val + 1);
    // setCounter(val + 1);
    // setCounter(val + 1);
    // setCounter(val + 1);

    // Instead we can use this
    // as the setCounter take call back and in that we can accesss the previous value of the counter and then we can update it according to the usage
    setCounter((prevCounter) => prevCounter + 1); // 0 + 1 = 1
    setCounter((prevCounter) => prevCounter + 1); // 1 + 1 = 2
    setCounter((prevCounter) => prevCounter + 1); // 2 + 1 = 3
    setCounter((prevCounter) => prevCounter + 1); // 3 + 1 = 4
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
