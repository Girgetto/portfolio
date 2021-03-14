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
            first: 8
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
                languages(first: 3) {
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
    <div>
      <h1>My Github projects</h1>
      <ol>
        {edges.map(({ node }) => (
          <li
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div>
                <h1>{node.name}</h1>
                <p>{node.description}</p>
              </div>
              <div>
                <div>
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <span>{node.forkCount}</span>
                </div>
                <div>
                  {node.languages.nodes.map(({ id, name }) => (
                    <span key={id}>{name}</span>
                  ))}
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
