import React from "react";

import CodeThinking from "../../assets/CodeThinking";
import config from "../../config/config.json";

const About = () => (
  <div className="container about about-flex">
    <div className="left">
      <h1 className="about-title">About me</h1>
      <p className="description">
        I'm a big fan of the world of programming and technology. I put all of
        myself into every project I do, trying to bring my ideas to reality. I
        feel comfortable working in a group trying to inspire all my teammates.
        I began to study the basics of programming from high school, I continued
        my studies at the University of Florence. Moved to Madrid in 2017 to
        increase my knowledge in programming at{" "}
        <a target="blank" href={config.ironHackURL}>
          IronHack
        </a>{" "}
        where I've worked as Teacher Assistant and from April 2019 part of the{" "}
        <a target="blank" href={config.guidesmithsURL}>
          Guidesmiths
        </a>{" "}
        team.
      </p>
    </div>
    <CodeThinking className="right" />
  </div>
);

export default About;
