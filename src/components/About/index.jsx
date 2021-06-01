import React from "react";

import CodeThinking from "../../assets/CodeThinking";
import config from "../../config/config.json";

const About = () => (
  <div className="container about about-flex row">
    <div className="left">
      <h1 className="about-title">About me</h1>
      <p className="description">
        I'm a Full stack developer based in Madrid📍, born and raised in italy
        🇮🇹
        <br />
        Currently working at{" "}
        <a target="blank" href={config.guidesmithsURL}>
          DSCL Guidesmiths
        </a>{" "}
        💻 full time, giving classes at{" "}
        <a target="blank" href={"https://www.thebridge.tech/"}>
          The Bridge
        </a>{" "}
        part time 📚
      </p>
    </div>
    <CodeThinking className="right" />
  </div>
);

export default About;
