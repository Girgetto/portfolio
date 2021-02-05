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
    <p>
      Iconos diseñados por{" "}
      <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.es/" title="Flaticon">
        www.flaticon.es
      </a>
    </p>
  </footer>
);

export default footer;
