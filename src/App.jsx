import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

console.log('(̲̅G̲̅)(̲̅i̲̅)(̲̅o̲̅)(̲̅r̲̅)(̲̅g̲̅)(̲̅i̲̅)(̲̅o̲̅) (̲̅G̲̅)(̲̅r̲̅)(̲̅a̲̅)(̲̅s̲̅)(̲̅s̲̅)(̲̅i̲̅)(̲̅n̲̅)(̲̅i̲̅)))');

const App = () => (
	<div className="App">
		<Navbar />
		<Header />
		<About />
		<Footer />
	</div>
);

export default App;
