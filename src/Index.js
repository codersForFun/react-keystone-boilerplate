require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import { configureStore } from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

// const { pathname, search, hash } = window.location;
// const location = `${pathname}${search}${hash}`;

window.React = React;

// calling `match` is simply for side effects of
// loading route/component code for the initial location
// match({ routes, location }, () => {
render(
  <App store={store} />, mountApp
);
// });
