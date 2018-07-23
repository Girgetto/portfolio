import React, { Component } from "react";
import "./footer.css";

let date = new Date();
let year = date.getFullYear();

class footer extends Component {
  render() {
    return (
      <footer>
        <p>
          © Copyright {year} Giorgio Grassini
        </p>
      </footer>
    );
  }
}

export default footer;
