import React, { Component } from "react";

class Machine extends Component {
  render() {
    const { s1, s2, s3 } = this.props;
    let winner = s1 === s2 && s2 === s3;
    return (
      <div>
        <h3>
          {s1} {s2} {s3}
        </h3>
        <p>{winner ? "Winner!" : "Loser!"}</p>
      </div>
    );
  }
}
export default Machine;
