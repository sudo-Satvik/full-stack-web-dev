import React from "react";

const Button = ({ setColor, colorName, colorCSS, textColor="white" }) => {
  return (
    <>
      <button
        onClick={() => setColor(colorCSS)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
        style={{ backgroundColor: colorCSS , color: textColor }}
      >
        {colorName}
      </button>
    </>
  );
};

export default Button;
