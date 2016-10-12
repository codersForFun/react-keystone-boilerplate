import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  );
};

App.propTypes = {
  store: React.PropTypes.object.isRequired
};

App.Routes = routes;
App.History = browserHistory;

export default App;
