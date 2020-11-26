import React from 'react';
import ReactDOM from 'react-dom';
import navbar from './footer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<footer />, div);
	ReactDOM.unmountComponentAtNode(div);
});
