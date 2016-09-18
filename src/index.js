import React from 'react';
import { match } from 'react-router';
import { render } from 'react-dom';

import App from './App';

import { configureStore } from './store';

require('babel-polyfill');


// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

window.React = React;

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('Index require.ensure error', error);
  }

  return render(<App store={store} {...renderProps} />, mountApp);
});
