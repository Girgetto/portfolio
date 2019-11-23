import "./projects.css";
import React from "react";
import projectsArr from "../../projects.json";
import Project from "../project/project";

const projects = () => (
  <div>
    <h1 style={{ fontWeight: "300" }}>Projects</h1>
    <div className="projects-container">
      {projectsArr.map(projectsElem => (
        <Project key={projectsElem.name} {...projectsElem} />
      ))}
    </div>
  </div>
);

export default projects;
