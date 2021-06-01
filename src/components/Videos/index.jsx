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
  return (
    <div className="container">
      <h1>My Videos</h1>
      {edges.map((video) => (
        <div className="video-content" key={video.node.id}>
          <a href={video.node.url} target="_blank">
            <img
              className="video-image"
              src={video.node.thumbnail}
              alt="video"
            />
            {video.node.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
