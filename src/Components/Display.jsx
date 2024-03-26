import React from "react";
import "./Display.css";

const Display = ({ displayVal }) => {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={displayVal}
        placeholder="enter value..."
        className="Display"
        readOnly
      />
    </div>
  );
};

export default Display;
