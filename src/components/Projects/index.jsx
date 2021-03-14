import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Box } from "../../templates";
import Bubble from "../../assets/Bubble";

const Projects = () => {
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
  const [state, setState] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const handleScroll = (e) => {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" onScroll={handleScroll}>
      <Bubble className="bubble" y={state.y}/>
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
