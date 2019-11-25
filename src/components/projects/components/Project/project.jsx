import React from "react";
import "./project.css";

const navigate = site => window.open(`${site}`);

const project = props => (
  <div className="slide-fwd-center">
    <div className="linker" onClick={() => navigate(props.siteUrl)}>
      <div className="column-wrapper">
        <div className="col-6">
          <img
            className="frame"
            src={
              props.img
                ? require(`../../../../assets/img/${props.img}.png`)
                : props.imgUrl
            }
            alt="img"
          />
        </div>
        <div className="col-6">
          <div className="project-title">
            <h2>{props.name}</h2>
            {props.githubUrl && (
              <a
                className="github-button"
                href={props.githubUrl}
                data-size="large"
                data-show-count="true"
                aria-label="Star Girgetto/IronSpace on GitHub"
              >
                Star
              </a>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default project;
