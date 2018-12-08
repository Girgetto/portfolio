import React, { Component } from "react";
import "./footer.css";

let date = new Date();
let year = date.getFullYear();

class footer extends Component {
  render() {
    return (
      <footer className='container' style={{marginTop:'1rem',paddingTop:'1rem',borderTop:'1px solid #eee'}}>
        <p>
          © Copyright {year} Giorgio Grassini
        </p>
      </footer>
    );
  }
}

export default footer;
