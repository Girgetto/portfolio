import React, { Component } from "react";
import "./App.css";
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Header from './components/header/header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
