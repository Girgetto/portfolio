import React, { Component } from 'react';
import logo from './img/profile.JPG';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="profile-logo" alt="logo" />
          <h1 className="App-title">Giorgio Grassini</h1>
          <h1 className="Title-description">Fullstack developer</h1>
        </header>
      </div>
    );
  }
}

export default App;
