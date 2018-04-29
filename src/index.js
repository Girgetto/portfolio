import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar/navbar';
import About from './about/about';
import Footer from './footer/footer';
import Projects from './projects/projects'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
registerServiceWorker();
