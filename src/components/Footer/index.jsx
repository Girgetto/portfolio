import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer
    className="container"
  >
    <p>©Giorgio Grassini {year}</p>
  </footer>
);

export default Footer;
