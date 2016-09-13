require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import { match, Router } from 'react-router';
import { browserHistory } from 'react-router';
import routes from './routes';

const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

window.React = React;

// calling `match` is simply for side effects of
// loading route/component code for the initial location
match({ routes, location }, () => {
  render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root')
  );
});
