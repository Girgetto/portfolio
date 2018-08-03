import React, { Component } from "react";
import loogle from "../img/loogle.png";
import languinator from "../img/languinator.png";
import ironSapce from "../img/ironSpace.png";
import "./projects.css";

class projects extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://girgetto.github.io/IronSpace/index.html">
              <img class="frame" src={ironSapce} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <h2>
              IronSpace{" "}
              <a
                class="github-button"
                href="https://github.com/Girgetto/IronSpace"
                data-size="large"
                data-show-count="true"
                aria-label="Star Girgetto/IronSpace on GitHub"
              >
                Star
              </a>
            </h2>
            <p>
              The game's goal is to direct the spaceship <span>🚀</span> to the
              target without hitting the planets!
            </p>
          </div>
        </div>

        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://loogleee.herokuapp.com">
              <img class="frame" src={loogle} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <h2>
              Loogle{" "}
              <a
                class="github-button"
                href="https://github.com/giorgioxarlie/myAdvisor"
                data-size="large"
                data-show-count="true"
                aria-label="Star Girgetto/LanguageChatbot on GitHub"
              >
                Star
              </a>
            </h2>
            <p>
              Application created to find and evaluate public toilets
              <span>🚽</span>
            </p>
          </div>
        </div>

        <div class="column-wrapper">
          <div class="col-6">
            <a href="https://languinator.herokuapp.com">
              <img class="frame" src={languinator} alt="img" />
            </a>
          </div>
          <div class="col-6">
            <h2>
              languinator{" "}
              <a
                class="github-button"
                href="https://github.com/LanguageChatBot/LanguageChatbot"
                data-size="large"
                data-show-count="true"
                aria-label="Star Girgetto/LanguageChatbot on GitHub"
              >
                Star
              </a>
            </h2>
            <p>
              Application to learn English by chatting with a bot
              <span>🤖</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
