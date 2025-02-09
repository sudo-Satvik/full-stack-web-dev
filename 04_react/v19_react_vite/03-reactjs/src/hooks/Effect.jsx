import { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState("HH:MM:SS");
  //   console.log("Hello " + Math.random());            // this will run jbtk hum increment btn ko click krenge
  //   useEffect(() => {
  //     console.log("Hello from useEffect");            // this will run only for once
  //   }, []);

  useEffect(() => {
    console.log("count value: " + counter);
  }, [counter]);

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
    //   console.log(now.toLocaleTimeString() + " " + Math.random());
      setTime(now.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>

      <p>Time: {time}</p>
    </div>
  );
};

export default Effect;
