require('babel-register');

if (typeof process.env.NODE_ENV === 'undefined' ||
  process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

const keystone = require('keystone');

keystone.init({
  name: 'React App Keystone',
  brand: 'ReactApp',
  favicon: './favicon.ico',
  less: 'dist',
  static: 'dist',
  views: './template/',
  'view engine': 'jade',
  'auto update': true,
  mongo: process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/react-app',

  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'demo',
});

// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models/');

// This is where your normal routes and files are handled
keystone.set('routes', require('./server'));

keystone.start();
//
