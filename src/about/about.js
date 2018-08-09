import React,{ Component } from "react";
import "./about.css";

class about extends Component {
  render() {  
    return (
      <div>
        <h3>About me</h3>
        <p>
          I'm a big fan of the world of programming and technology. I put all of
          myself into every project I do, trying to bring my ideas to reality. I
          feel comfortable working in a group trying to inspire all my
          teammates. I began to study the basics of programming from high
          school, I continued my studies at the University of Florence and at
          the same time I was working for <a href="http://www.hotelvillacasalecchi.com">Hotel Villa Casalecchi</a> as IT. Moved to
          Madrid in 2017 to increase my knowledges in programming at <a href="https://www.ironhack.com">IronHack</a> where I work as TA.
        </p>
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
