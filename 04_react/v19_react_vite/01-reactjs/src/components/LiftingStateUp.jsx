import { useState } from "react";

const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-5">
        Lifting State Up
      </h1>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent outputData={inputValue} />
      </div>
    </div>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  //   const [inputValue, setInputValue] = useState("");     // Instead of defining here, we can define in parent component and pass it as props
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-white border-1 p-3"
      />
    </div>
  );
};

const DisplayComponent = ({ outputData }) => {
  return (
    <div>
      <h1>Your name is: {outputData}</h1>
    </div>
  );
};

export default LiftingStateUp;
