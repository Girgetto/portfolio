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
        <h2>IronSpace</h2>
        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://girgetto.github.io/IronSpace/index.html">
              <img class="frame" src={ironSapce} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <p>
              The game's goal is to direct the spaceship <span>🚀</span> to the
              target without hitting the planets!
            </p>
            <ul class="icons">
              <li>
                <i class="devicon-html5-plain colored" />
              </li>
              <li>
                <i class="devicon-css3-plain colored" />
              </li>
              <li>
                <i class="devicon-javascript-plain colored" />
              </li>
              <li>
                <i class="devicon-git-plain colored" />
              </li>
            </ul>
            <a
              class="github-button"
              href="https://github.com/Girgetto/IronSpace"
              data-size="large"
              data-show-count="true"
              aria-label="Star Girgetto/IronSpace on GitHub"
            >
              Star
            </a>
          </div>
        </div>
        <h2>Loogle</h2>
        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://loogleee.herokuapp.com">
              <img class="frame" src={loogle} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <p>
              Application created to find and evaluate public toilets
              <span>🚽</span>
              <ul class="icons">
                <li>
                  <i class="devicon-html5-plain colored" />
                </li>
                <li>
                  <i class="devicon-css3-plain colored" />
                </li>
                <li>
                  <i class="devicon-javascript-plain colored" />
                </li>
                <li>
                  <i class="devicon-jquery-plain-wordmark colored" />
                </li>
                <li>
                  <i class="devicon-nodejs-plain colored" />
                </li>
                <li>
                  <i class="devicon-express-original colored" />
                </li>
                <li>
                  <i class="devicon-mongodb-plain-wordmark colored" />
                </li>
                <li>
                  <i class="devicon-git-plain colored" />
                </li>
              </ul>
            </p>
            <a
              class="github-button"
              href="https://github.com/giorgioxarlie/myAdvisor"
              data-size="large"
              data-show-count="true"
              aria-label="Star Girgetto/LanguageChatbot on GitHub"
            >
              Star
            </a>
          </div>
        </div>
        <h2>languinator</h2>
        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://languinator.herokuapp.com">
              <img class="frame" src={languinator} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <p>
              Application to learn English by chatting with a bot
              <span>🤖</span>
            </p>
            <ul class="icons">
              <li>
                <i class="devicon-html5-plain colored" />
              </li>
              <li>
                <i class="devicon-css3-plain colored" />
              </li>
              <li>
                <i class="devicon-javascript-plain colored" />
              </li>
              <li>
                <i class="devicon-jquery-plain-wordmark colored" />
              </li>
              <li>
                <i class="devicon-nodejs-plain colored" />
              </li>
              <li>
                <i class="devicon-express-original colored" />
              </li>
              <li>
                <i class="devicon-mongodb-plain-wordmark colored" />
              </li>
              <li>
                <i class="devicon-angularjs-plain colored" />
              </li>
              <li>
                <i class="devicon-git-plain colored" />
              </li>
            </ul>
            <a
              class="github-button"
              href="https://github.com/LanguageChatBot/LanguageChatbot"
              data-size="large"
              data-show-count="true"
              aria-label="Star Girgetto/LanguageChatbot on GitHub"
            >
              Star
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
