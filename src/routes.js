import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import Hola from './components/Hola';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={App}>
    <Route path="hola" component={Hola} />
    <Route path="welcome" component={Welcome} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
