require('babel-register');
require('isomorphic-fetch');

const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// this must be equal to your Webpack configuration "context" parameter
const projectPath = path.resolve(__dirname);

// this global variable will be used later in express middleware
global.webpack_isomorphic_tools = new WebpackIsomorphicTools(require('./webpack-isomorphic-tools'))
// initializes a server-side instance of webpack-isomorphic-tools
// (the first parameter is the base path for your project
//  and is equal to the "context" parameter of you Webpack configuration)
// (if you prefer Promises over callbacks
//  you can omit the callback parameter
//  and then it will return a Promise instead)
.server(projectPath, function () {
  // webpack-isomorphic-tools is all set now.
  // here goes all your web application code:
  // (it must reside in a separate *.js file
  //  in order for the whole thing to work)
  require('./keystone');
});
