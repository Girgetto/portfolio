import React,{ Component } from "react";
import logo from '../img/profile.JPG';
import "./about.css";

class about extends Component {
  render() {  
    return (
      <div>
        <img src={logo} className="profile-logo" alt="logo" />
        <h1>About me</h1>
        <p>
          I'm a big fan of the world of programming and technology. I put all of
          myself into every project I do, trying to bring my ideas to reality. I
          feel comfortable working in a group trying to inspire all my
          teammates. I began to study the basics of programming from high
          school, I continued my studies at the University of Florence and at
          the same time I was working for Hotel Villa Casalecchi as IT. Moved to
          Madrid in 2017 to increase my knowledges in programming in IronHack
          where I work as TA.
        </p>
        <h1>Contact</h1>
        <a href="">
          <i class="fab fa-twitter-square fa-2x" />
        </a>
        <a href="">
          <i class="fab fa-linkedin fa-2x" />
        </a>
        <a href="">
          <i class="fab fa-facebook fa-2x" />
        </a>
        <a href="">
          <i class="fab fa-google-plus-square fa-2x" />
        </a>
        <a href="">
          <i class="fab fa-github-square fa-2x" />
        </a>
        <a href="">
          <i class="fas fa-envelope-square fa-2x" />
        </a>
      </div>
    );
  }
}

export default about;
