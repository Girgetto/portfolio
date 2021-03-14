import * as React from "react";

import * as Components from "../components";

const IndexPage = () => (
  <div className="App">
    <Components.SEO title="Home" />
    <Components.Navbar />
    <Components.Header />
    <Components.About />
    <Components.Projects />
    <Components.Footer />
  </div>
);

export default IndexPage;
