import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import Header from './components/Header';
import NotFound from './components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(location, callback) => {
        callback(null, Header);
      }}

    />
    <Route path="*" component={NotFound} />
  </Route>
);
