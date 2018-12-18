import './projects.css';
import React from 'react';
import projectsArr from '../../projects.json';
import Project from '../project/project';

const projects = () => (
  <div className="container" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
    <h1 style={{ fontWeight: '300' }}>Projects</h1>
    {projectsArr.map((projectsElem, i) => (
      <Project key={i} {...projectsElem} />
    ))}
  </div>
);

export default projects;
