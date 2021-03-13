import React from "react";

import Background from "../../assets/background.js";
import "./header.css";

const gitHubImg =
  "https://avatars3.githubusercontent.com/u/33903092?s=460&u=6184ecd306816175a754a42d871329f02d457272&v=4";

const header = () => (
  <header className="portfolio-header">
    <Background />
    <div className="container header-presentation">
      <img src={gitHubImg} className="profile-logo" alt="logo" />
      <h1 className="portfolio-title">Giorgio Grassini</h1>
      <h2 className="title-description header-title">
        Fullstack Developer
      </h2>
    </div>
  </header>
);

export default header;
