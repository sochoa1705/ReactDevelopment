import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todos from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
        <ul className="nav nav-pills nav-fills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href=" ">
              Tasks
            </a>
          </li>
        </ul>
      </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
