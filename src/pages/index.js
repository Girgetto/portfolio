import * as React from "react";

import "../styles/App.css";
import "../styles/index.css";
import { Navbar, Header, About, Footer, SEO } from "../components";

const IndexPage = () => {
  return (
    <div className="App">
      <SEO title="Home" />
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default IndexPage;
