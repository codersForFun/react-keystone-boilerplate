import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Actions
import { toggleAddPost } from './app_actions';

export class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount () {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  toggleAddPostSection () {
    this.props.dispatch(toggleAddPost().bind(this));
  }

  render () {
    return (
      <div>
        <div>
          <Helmet
            title='React-Redux-Keystone App'
            titleTemplate='%s'
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              }
            ]}
          />
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

// Retrieve data from store as props
function mapStateToProps (store) {
  return {
    intl: store.intl
  };
}

export default connect(mapStateToProps)(App);
