import React from "react";
import WelcomeUser from "./WelcomeUser";
const EventProps = () => {
  const userName = "Satvik Sharma";
  const now = new Date();
  const handleClick = (name) => {
    alert(`${now.getHours() > 12 ? "Good Evening" : "Good Morning"}, ${name}`);
  };

  const handleHover = () => {
    console.log("Thanks for hovering me");
  };

  return (
    <div>
      <WelcomeUser
        onClick={() => handleClick(userName)}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

export default EventProps;
