import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "../../templates";

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
            isFork: false
            first: 9
            orderBy: { field: STARGAZERS, direction: DESC }
            affiliations: OWNER
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
            <Box node={node} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
