import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const colorSwitcher = (name) => ({
 HTML: '#e34c26',
 JavaScript: '#f1e05a',
 CSS: '#563d7c',
 JupyterNotebook: '#DA5B0B',
}[name.replace(' ', '')])

const Box = ({ node }) => {
  return (
    <div className="box">
      <div>
        <a href={node.url} target="_blank" rel="noopener noreferrer">
          {node.name}
        </a>
        <p className="description">{node.description}</p>
      </div>
      <div className="box-footer">
        <div className="info">
          {node.languages.nodes.map(({ id, name }) => (
            <div key={id}>
              <FontAwesomeIcon icon={faCircle} style={{ color: colorSwitcher(name) }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faStar} />
          <span>{node.stargazers.totalCount}</span>
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span>{node.forkCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
