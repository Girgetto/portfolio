import React from 'react';
import ReactDOM from 'react-dom';
import projects from './projects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<projects />, div);
  ReactDOM.unmountComponentAtNode(div);
});
