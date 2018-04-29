import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="contact#">Contact</a>
        </li>
        <li>
          <a href="about#">About</a>
        </li>
      </ul>
    );
  }
}

export default navbar;
