import { useState } from "react";

const State = () => {
  const [inputValue, setInputValue] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>
        Count: <span style={{ color: "aqua" }}>{count}</span>
      </h3>
      <h4>
        Steps:{" "}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </h4>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => (count < 100 ? setCount(count + inputValue) : "")}
          disabled={count >= 100}
        >
          Increase
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => (count > 0 ? setCount(count - inputValue) : "")}
          disabled={count <= 0}
        >
          Decrease
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default State;
