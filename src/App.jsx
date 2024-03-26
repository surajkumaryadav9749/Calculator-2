import React from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import { useState } from "react";
import "./App.css";

const App = () => {
  let [currentVal, setCurrentVal] = useState("");

  const clicked = (buttonText) => {
    // console.log(event);
    // console.log(buttonText);
    if (buttonText === "C") {
      setCurrentVal("");
    } else if (buttonText === "=") {
      const result = eval(currentVal);
      setCurrentVal(result);
    } else {
      const newDisplayVal = currentVal + buttonText;
      setCurrentVal(newDisplayVal);
    }
  };
  return (
    <div className="Cal-container">
      <Display displayVal={currentVal} />
      <Buttons clicked={clicked}></Buttons>
    </div>
  );
};
export default App;
