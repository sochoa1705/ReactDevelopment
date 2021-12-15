import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todos from "./todos.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [todos]
    };
  }

  render() {
    const to_do = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card text-dark bg-light mb-3 mt-4">
            <div className="card-header" key={i}>{todo.title}</div>
            <div className="card-body">
              <p className="card-text" key={i}>
                {todo.description}
              </p>
            </div>
          </div>
        </div>
      );
    });

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
        <div className="container">
          <div className="row mt-4">
          {to_do}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
