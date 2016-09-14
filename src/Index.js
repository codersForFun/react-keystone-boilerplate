require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { configureStore } from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);

// Import Routes
import routes from './routes';
const mountApp = document.getElementById('root');

// const { pathname, search, hash } = window.location;
// const location = `${pathname}${search}${hash}`;

window.React = React;

// calling `match` is simply for side effects of
// loading route/component code for the initial location
// match({ routes, location }, () => {
render(
  <Router store={store} routes={routes} history={browserHistory} />,
  mountApp
);
// });
