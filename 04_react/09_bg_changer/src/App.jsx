import { useState } from "react";
import Button from "./button";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-gray-100 rounded-full px-3 py-2">
          <Button setColor={setColor} colorName="Red" colorCSS="red" />
          <Button setColor={setColor} colorName="Yellow" textColor="black" colorCSS="yellow" />
          <Button setColor={setColor} colorName="Green" colorCSS="green" />
          <Button setColor={setColor} colorName="Pink" textColor="black" colorCSS="pink" />
          <Button setColor={setColor} colorName="Brown" colorCSS="brown" />
          <Button setColor={setColor} colorName="Violet" colorCSS="violet" />
          <Button setColor={setColor} colorName="Blue" colorCSS="blue" />
          <Button setColor={setColor} colorName="White" textColor="black" colorCSS="white" />
          <Button setColor={setColor} colorName="Black" colorCSS="black" />
        </div>
      </div>
    </div>
  );
}

export default App;
