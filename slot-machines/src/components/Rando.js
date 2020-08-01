import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.updateNumber = this.updateNumber.bind(this);
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

  updateNumber() {
    let randNum = Math.floor(Math.random() * this.props.maxNum) + 1;
    this.setState({
      num: randNum,
    });
  }
  render() {
    return (
      <div>
        <h3>Number is: {this.state.num}</h3>
        {this.state.num === 7 ? (
          "WINNER!"
        ) : (
          <button onClick={this.updateNumber}>Click Me!</button>
        )}
      </div>
    );
  }
}
export default Rando;
