import * as React from "react";

import "../styles/App.css";
import "../styles/index.css";
import { Navbar, Header, About, Footer } from '../components'

const IndexPage = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default IndexPage;
