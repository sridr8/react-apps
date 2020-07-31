import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Machine from "./components/Machine";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine />
      </div>
    );
  }
}
export default App;
