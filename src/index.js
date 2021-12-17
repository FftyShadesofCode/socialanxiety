import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import _ from 'lodash';

function component() {
    const element = document.createElement('div');

// Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
