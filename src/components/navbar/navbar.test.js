import React from 'react';
import ReactDOM from 'react-dom';
import navbar from './navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
