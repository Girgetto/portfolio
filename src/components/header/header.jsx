import React from "react";

const gitHubImg = "https://avatars3.githubusercontent.com/u/33903092?s=460&u=6184ecd306816175a754a42d871329f02d457272&v=4"

const header = () => (
  <header className="App-header">
    <img
      src={gitHubImg}
      className="profile-logo"
      alt="logo"
    />
    <h1 className="App-title">Giorgio Grassini</h1>
    <h2 className="Title-description container header-title">
      Fullstack Developer
    </h2>
  </header>
);

export default header;
