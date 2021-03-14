import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Projects = (props) => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(graphql`
    {
      github {
        viewer {
          repositories(
            first: 9
            orderBy: { field: STARGAZERS, direction: ASC }
          ) {
            edges {
              node {
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
                languages(first: 1) {
                  nodes {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <h1 className="title">My Github projects</h1>
      <ol>
        {edges.map(({ node }) => (
          <li key={node.id}>
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
                    <span key={id}>{name}</span>
                  ))}
                </div>
                <div className="info">
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div className="info">
                  <span>{node.forkCount}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
