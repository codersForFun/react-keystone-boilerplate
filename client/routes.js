// Import components
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
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./components/Layout').default);
      });
    }
  },
  childRoutes: [{
    path: 'about',
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./components/About/About').default);
      });
    }
  },
    {
      path: '*',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./components/404').default);
        });
      }
    }
  // {
  //   path: 'blog',
  //   getComponent (location, cb) {
  //     require.ensure([], () => {
  //       cb(null, require('./components/Blog/Blog').default)
  //     })
  //   }
  // }, {
  //   path: 'destinations',
  //   getComponent (location, cb) {
  //     require.ensure([], () => {
  //       cb(null, require('./components/Destinations/Destinations').default)
  //     })
  //   }
  // }, {
  //   path: 'shop',
  //   getComponent (location, cb) {
  //     require.ensure([], () => {
  //       cb(null, require('./components/Shop/Shop').default)
  //     })
  //   }
  // }, {
  //   path: 'contact',
  //   getComponent (location, cb) {
  //     require.ensure([], () => {
  //       cb(null, require('./components/Contact/Contact').default)
  //     })
  //   }
  // }
  ]
};

export default rootRoute;
