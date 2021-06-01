import * as React from "react";

import * as Components from "../components";

const IndexPage = () => (
  <div className="App">
    <Components.SEO title="Home" />
    <Components.Navbar />
    <Components.Header />
    <Components.About />
    <Components.Videos />
    <Components.Projects />
    <Components.Footer />
    <Components.Cookies />
  </div>
);

export default IndexPage;
