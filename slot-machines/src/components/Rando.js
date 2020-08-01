import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 7,
    };
    //this.makeTimer(); // uncomment to run the timer function
  }
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({
        num: rand,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}
export default Rando;
