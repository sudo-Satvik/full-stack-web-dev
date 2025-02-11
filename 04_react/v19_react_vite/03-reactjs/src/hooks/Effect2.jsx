import { useState, useEffect } from "react";

const Effect2 = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  // title is came outside of react, so we have to use the useEffect for handling the side effects
  useEffect(() => {
    document.title = `count: ${counter}`;
  }, [counter]);

  //   document.title = `count: ${counter}`;
  return (
    <>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <br />
      <p>
        Name:{" "}
        <strong>
          {input
            ? input
            : "Input data will appear here as soon as you enter the data"}
        </strong>
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default Effect2;
