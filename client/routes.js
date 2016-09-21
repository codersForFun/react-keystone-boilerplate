import App from './components/App';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

const rootRoute = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, cb) {
      require.ensure([], () => {
        cb(null, require('./components/Header').default);
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
