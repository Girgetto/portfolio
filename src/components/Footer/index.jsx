import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
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

export default Footer;
