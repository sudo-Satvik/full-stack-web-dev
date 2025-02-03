import React from "react";

const WelcomeUser = ({ onClick, onMouseEnter }) => {
  return (
    <>
      <h1>Event Props</h1>
      <button
        className="btn bg-blue-500 px-4 py-3 m-10"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        Welcome User
      </button>

      {/* We can use the function in reverse mannar too! */}
      <button className="btn bg-blue-500 px-4 py-3 m-10" onMouseEnter={onClick}>
        Welcome User 2
      </button>
    </>
  );
};

export default WelcomeUser;
