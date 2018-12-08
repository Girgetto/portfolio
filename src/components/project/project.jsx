import React from 'react';
import './project.css';

const project = props => (
      <div className="container slide-fwd-center">
        <div className="column-wrapper">
          <div className="col-6">
            <a href={props.siteUrl} target='_blank'>
              <img className="frame" src={require(`../../assets/img/${props.img}.png`)} alt="img" />
            </a>
          </div>
          <div className="col-6">
            <div className="project-title">
              <h2>{props.name}</h2>
              <a
                className="github-button"
                href={props.githubUrl}
                data-size="large"
                data-show-count="true"
                aria-label="Star Girgetto/IronSpace on GitHub"
              >
                Star
              </a>
            </div>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
);

export default project;
