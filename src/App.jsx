import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

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
