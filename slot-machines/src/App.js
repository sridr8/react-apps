import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Machine from "./components/Machine";
import Rando from "./components/Rando";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="🍎" s2="🍎" s3="🍎" />
        <Machine s1="🍎" s2="🍐" s3="🍎" />
        <Machine s1="🍑" s2="🥝" s3="🍑" />
        <Machine s1="🥕" s2="🥕" s3="🥕" />
        <Machine s1="🥕" s2="🍈" s3="🍇" />
        <Rando maxNum={7} />
      </div>
    );
  }
}
export default App;
