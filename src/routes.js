import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import NotFound from './components/NotFound';

const routes = (props) => {
  console.log('PROPS', props);
  return (
    <Provider store={props.store}>
      <Route path="/" component={App}>
        <Route path="*" component={NotFound} />
      </Route>
    </Provider>
  );
};

export default routes;
