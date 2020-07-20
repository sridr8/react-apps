import React from "react";

function Time(props) {
  return (
    <div className="container">
      <h1>{props.time}</h1>
      <button onClick={props.update}>Get Time</button>
    </div>
  );
}

export default Time;
