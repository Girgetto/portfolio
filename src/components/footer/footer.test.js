import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import navbar from './footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
