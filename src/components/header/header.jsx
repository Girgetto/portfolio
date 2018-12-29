import React from 'react';
import logo from '../../assets/img/profile.png';

const ihLink = 'https://www.ironhack.com/en/home?utm_expid=.kSLQXMBcSpGkOTJgQLLfoA.1&utm_referrer=';

const header = () => (
  <header className="App-header">
    <img src={logo} className="profile-logo" alt="logo" />
    <h1 className="App-title">Giorgio Grassini</h1>
    <h2 className="Title-description container">
TA at
      <a href={ihLink}> Ironhack</a>
    </h2>
  </header>
);

export default header;
