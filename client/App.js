import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

App.Routes = routes;
App.History = browserHistory;

export default App;
