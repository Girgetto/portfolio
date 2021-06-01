import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Bubble from '../../assets/Bubble';

export default function Posts() {
  const {
    allBlogPosts: { edges },
  } = useStaticQuery(graphql`
    {
      allBlogPosts(skip: 1, limit: 6) {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <Bubble />
      <h1>My Posts</h1>
      {edges.map((post) => (
        <div className="post-content" key={post.node.id}>
          <span id="point-right">👉{" "}</span>
          <a className="post-link" href={post.node.url} target="_blank">
            {post.node.title}
          </a>
        </div>
      ))}
    </div>
  );
}
