import { useState } from "react";
const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-bold m-10">States in ReactJS</h1>
      <button
        className="btn bg-indigo-700 px-10 py-2 mb-10 mx-10 rounded-md text-3xl font-bold"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default State;
