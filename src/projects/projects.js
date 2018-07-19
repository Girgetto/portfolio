import React, { Component } from "react";
import loogle from "../img/loogle.png";
import languinator from "../img/languinator.png";
import ironSapce from "../img/ironSpace.png";
import "./projects.css";

class projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div class="column-wrapper">
          <div class="col-4">
            <a href="https://girgetto.github.io/IronSpace/index.html">
              <img class="frame" src={ironSapce} alt="img" />
            </a>
          </div>
          <div class="col-4">
            <a href="https://loogleee.herokuapp.com">
              <img class="frame" src={loogle} alt="img" />
            </a>
          </div>
          <div class="col-4">
            <a href="https://languinator.herokuapp.com">
              <img class="frame" src={languinator} alt="img" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
