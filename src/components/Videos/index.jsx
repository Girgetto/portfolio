import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Videos = () => {
  const {
    allYouTubeVideos: { edges },
  } = useStaticQuery(graphql`
    {
      allYouTubeVideos {
        edges {
          node {
            id
            url
            title
            thumbnail
          }
        }
      }
    }
  `);
  console.log(edges);
  return (
    <div className="container">
      {edges.map((video) => (
        <div key={video.node.id}>
          <img src={video.node.thumbnail} alt="video"/>
          <a href={video.node.url}>{video.node.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
