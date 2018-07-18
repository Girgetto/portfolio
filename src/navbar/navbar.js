import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="https://github.com/Girgetto">GitHub</a>
          <a href="https://twitter.com/__Giorgio_">Twitter</a>
          <a href="https://www.facebook.com/ggrassini">Facebook</a>
        </li>
      </ul>
    );
  }
}

export default navbar;
