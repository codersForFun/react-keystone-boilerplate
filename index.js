/**
 * Entry Script
 */
// Babel polyfill to convert ES6 code in runtime
require('babel-register')();
require('babel-polyfill');
require('./server/server');
