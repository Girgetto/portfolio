import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import navbar from './navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
