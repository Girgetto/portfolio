import React from "react";

import Background from "../../assets/background.js";
import { gitHubImg } from "../../config/config.json";

const Header = () => (
  <header className="portfolio-header">
    <Background />
    <div className="container header-presentation">
      <img src={gitHubImg} className="profile-logo" alt="logo" />
      <h1 className="portfolio-title">Giorgio Grassini</h1>
      <h2 className="header-job-title">Fullstack Developer</h2>
    </div>
  </header>
);

export default Header;
