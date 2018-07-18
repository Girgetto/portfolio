import React, { Component } from "react";
import logo from "./img/profile.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="profile-logo" alt="logo" />
          <h1 className="App-title">Giorgio Grassini</h1>
          <h2 className="Title-description container">
            TA at{" "}
            <a href="https://www.ironhack.com/en/home?utm_expid=.kSLQXMBcSpGkOTJgQLLfoA.1&utm_referrer=">
              Ironhack
            </a>
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
