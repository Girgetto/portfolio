import "./projects.css";
import React from "./node_modules/react";
import projectsArr from "../../projects.json";
import Project from "../project/project";

const renderProjects = () =>
  projectsArr.map(projectsElem => (
    <Project key={projectsElem.name} {...projectsElem} />
  ));

const projects = () => (
  <div>
    <h1 style={{ fontWeight: "300" }}>Projects</h1>
    <div className="projects-container">{renderProjects()}</div>
  </div>
);

export default projects;
