import React from 'react';
import ReactDOM from 'react-dom';
import about from './about';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<about />, div);
  ReactDOM.unmountComponentAtNode(div);
});
