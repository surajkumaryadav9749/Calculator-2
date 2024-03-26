import React from "react";
import "./Buttons.css";

const Buttons = ({ clicked }) => {
  let buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="buttons-container">
      {buttonsName.map((ele) => (
        <button key={ele} className="cal-btn" onClick={() => clicked(ele)}>
          {ele}{" "}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
