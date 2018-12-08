import React from "react";
import "./projects.css";
import Project from "../project/project";
import projectsArr from "../../projects.json";

const projects = () => {
  return (
    <div className='container' style={{marginTop:'1rem',paddingTop:'1rem',borderTop:'1px solid #eee'}}>
      <h1 style={{fontWeight:'300'}}>Projects</h1>
      {projectsArr.map((projects, i) => (
        <Project key={i} {...projects} />
      ))}
    </div>
  );
};

export default projects;
