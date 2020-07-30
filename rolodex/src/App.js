import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = { 
      name : 'Jyothi', 
      occupation : 'Maths Teacher'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React App 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jyos
          </a>
          <br/>
          <button onClick= {() => this.setState({ occupation: 'Also an excellent cook!'})}>Click me</button>
          <p>{this.state.occupation}</p>
        </header>
      </div>
    );
    }
}

export default App;
