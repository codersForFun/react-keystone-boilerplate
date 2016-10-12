require('babel-register');

if (typeof process.env.NODE_ENV === 'undefined' ||
  process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

// ignore requesting file .scss
require.extensions['.scss'] = () => {
  return;
};

const Express = require('express');
const keystone = require('keystone');
const body = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cookieSecret = process.env.COOKIE_SECRET || 'demo';

const app = new Express();

app.use(cookieParser(cookieSecret));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(multer());

keystone.init({
  name: 'React App Keystone',
  brand: 'ReactApp',
  favicon: './favicon.ico',
  static: 'dist',
  'auto update': true,
  mongo: process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/react-app',
  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': cookieSecret
});

// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models/');
// This is where your normal routes and files are handled
keystone.set('routes', require('./server'));

keystone.express = app;
keystone.start();
