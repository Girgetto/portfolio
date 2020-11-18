import React from "react";
import logo from "../../assets/img/profile.jpg";

const header = () => (
  <header className="App-header">
    <img src={logo} className="profile-logo" alt="logo" />
    <h1 className="App-title">Giorgio Grassini</h1>
    <h2 className="Title-description container header-title">
      Fullstack Developer
    </h2>
  </header>
);

export default header;
