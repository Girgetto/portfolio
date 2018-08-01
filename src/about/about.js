import React,{ Component } from "react";
import "./about.css";

class about extends Component {
  render() {  
    return (
      <div>
        <h1>About me</h1>
        <p>
          I'm a big fan of the world of programming and technology. I put all of
          myself into every project I do, trying to bring my ideas to reality. I
          feel comfortable working in a group trying to inspire all my
          teammates. I began to study the basics of programming from high
          school, I continued my studies at the University of Florence and at
          the same time I was working for Hotel Villa Casalecchi as IT. Moved to
          Madrid in 2017 to increase my knowledges in programming at IronHack
          where I work as TA.
        </p>
        <ul><h2>Tools</h2>
            <li><i class="devicon-html5-plain colored"></i></li>
            <li><i class="devicon-css3-plain colored"></i></li>
            <li><i class="devicon-javascript-plain colored"></i></li>
            <li><i class="devicon-jquery-plain-wordmark colored"></i></li>
            <li><i class="devicon-nodejs-plain colored"></i></li>
            <li><i class="devicon-express-original colored"></i></li>
            <li><i class="devicon-mongodb-plain-wordmark colored"></i></li>
            <li><i class="devicon-bootstrap-plain colored"></i></li>
            <li><i class="devicon-angularjs-plain colored"></i></li>
            <li><i class="devicon-git-plain colored"></i></li>
          </ul>
        <h2>Contacts</h2>
        <a href="https://twitter.com/__Giorgio_">
          <i class="fab fa-twitter-square fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/giorgio-grassini-458023150/">
          <i class="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://www.facebook.com/ggrassini">
          <i class="fab fa-facebook fa-2x" />
        </a>
        <a href="https://plus.google.com/u/0/112911520666250234745">
          <i class="fab fa-google-plus-square fa-2x" />
        </a>
        <a href="https://github.com/Girgetto">
          <i class="fab fa-github-square fa-2x" />
        </a>
        <a href="mailto:giorgiograssini@gmail.com">
          <i class="fas fa-envelope-square fa-2x" />
        </a>
      </div>
    );
  }
}

export default about;
