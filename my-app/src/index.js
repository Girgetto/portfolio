import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar/navbar'
import About from './about/about'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<About />, document.getElementById('about'));
registerServiceWorker();
