import { useState, useEffect } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState("HH:MM:SS");

  // useEffect(() => {
  // console.log(counter);
  // }, [counter]);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>

      <h2>Time right now: {time}</h2>
    </>
  );
};

export default Effect;
