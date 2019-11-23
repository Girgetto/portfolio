import React from "react";
import "./about.css";

const about = () => (
  <div
    className="container"
    style={{
      marginTop: "1rem",
      paddingTop: "1rem",
      borderTop: "1px solid #eee"
    }}
  >
    <h1 style={{ fontWeight: "300" }}>About me</h1>
    <p>
      I'm a big fan of the world of programming and technology. I put all of
      myself into every project I do, trying to bring my ideas to reality. I
      feel comfortable working in a group trying to inspire all my teammates. I
      began to study the basics of programming from high school, I continued my
      studies at the University of Florence and at the same time I was working
      for{" "}
      <a href="http://www.hotelvillacasalecchi.com">Hotel Villa Casalecchi</a>{" "}
      as IT. Moved to Madrid in 2017 to increase my knowledge in programming at{" "}
      <a href="https://www.ironhack.com">IronHack</a> where I work as Teacher's
      Assistant and from April 2019 part of the{" "}
      <a href="https://www.guidesmiths.com/">Guidesmiths</a> team.
    </p>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/__Giorgio_"
    >
      <i className="fab fa-twitter-square fa-2x" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/giorgio-grassini-458023150/"
    >
      <i className="fab fa-linkedin fa-2x" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Girgetto"
    >
      <i className="fab fa-github-square fa-2x" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:giorgiograssini@gmail.com"
    >
      <i className="fas fa-envelope-square fa-2x" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://girgetto-io.netlify.com"
    >
      <i className="fab fa-blogger-b fa-2x" />
    </a>
  </div>
);

export default about;
