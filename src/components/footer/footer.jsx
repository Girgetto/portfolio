import React from "react";
import "./footer.css";

const date = new Date();
const year = date.getFullYear();

const footer = () => (
  <footer
    className="container"
    style={{
      marginTop: "1rem",
      paddingTop: "1rem",
      borderTop: "1px solid #eee",
    }}
  >
    <p>©Giorgio Grassini {year}</p>
  </footer>
);

export default footer;
