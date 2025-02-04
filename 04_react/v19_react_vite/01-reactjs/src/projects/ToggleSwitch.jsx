import { useState } from "react";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <h1 className="text-4xl font-semibold text-center py-10">
        Toggle Switch
      </h1>
      <div
        onClick={() => (toggle ? setToggle(false) : setToggle(true))}
        className="bg-gray-400 w-45 h-20 rounded-full mx-auto relative cursor-pointer"
      >
        <div
          className={`${
            toggle ? "bg-green-700 right-2" : "bg-red-700 left-2"
          } w-17 rounded-full p-5 absolute top-2`}
        >
          <span>{toggle ? "ON" : "OFF"}</span>
        </div>
      </div>

      <div
        onClick={() => setToggle(!toggle)}
        className="bg-gray-400 mt-10 w-45 h-20 rounded-full mx-auto relative cursor-pointer"
      >
        <div
          className={`${
            toggle ? "bg-gray-700 right-2" : "bg-white text-black left-2"
          } w-17 rounded-full py-5 pl-3 absolute top-2`}
        >
          <span>{toggle ? "DARK" : "LIGHT"}</span>
        </div>
      </div>
      <div
        className={`w-100 h-100 container mx-auto mt-10 text-center ${
          toggle ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis animi.
        Aliquam nesciunt magnam fuga, similique sint totam assumenda? Tempore,
        deserunt dolorem. Atque adipisci asperiores aliquam incidunt nesciunt,
        quas voluptas!
      </div>
    </>
  );
};

export default ToggleSwitch;
