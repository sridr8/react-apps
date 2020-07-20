import React, { useState } from "react";


function Time(props) {
  const [isMouseOver, setMouseOver] = useState(false);
function handleMouseOver() {
  setMouseOver(true);
}
function handleMouseOut() {
  setMouseOver(false);
}
  return (
    <div className="container">
      <h1 className="label">{props.time}</h1>
      <button 
      style={{backgroundColor: isMouseOver ? "#2d3436":"#1a7e76"}}
      onClick={props.update}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>Get Time</button>
    </div>
  );
}

export default Time;
