// Import components
import App from './components/App';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

// TODO: for Manuel -> check if this can be
// changed with diff method
// Test
const rootRoute = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, cb) {
      require.ensure([], () => {
        cb(null, require('./components/Layout').default);
      });
    },
  },
  childRoutes: [
    {
      path: 'search',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./components/404').default);
        });
      },
    },
  ],
};

export default rootRoute;
