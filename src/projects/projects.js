import React, { Component } from "react";
import loogle from "../img/loogle.png";
import languinator from "../img/languinator.png";
import ironSapce from "../img/ironSpace.png";
import portfolio from '../img/portfolio.png'
import "./projects.css";

class projects extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <h1>Projects</h1>
          <div class="flex-container">
            <div class="flex-item">
              <a href="https://girgetto.github.io/IronSpace/index.html">
                <img class="frame" src={ironSapce} alt="img" />
              </a>
            </div>
            <div class="flex-item">
              <a href="https://loogleee.herokuapp.com">
                <img class="frame" src={loogle} alt="img" />
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="flex-container">
            <div class="flex-item">
              <a href="https://languinator.herokuapp.com">
                <img class="frame" src={languinator} alt="img" />
              </a>
            </div>
            <div class="flex-item">
              <a href="">
                <img class="frame" src={portfolio} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
