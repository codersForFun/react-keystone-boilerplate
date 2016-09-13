'use strict';
const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from '../src/routes.js';

keystone.pre('routes', (req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Handle 404 errors
keystone.set('404', (req, res) => {
  res.status(404).render('404', {
    errorTitle: '404',
    errorMsg: 'Ups',
  });
});

// Handle other errors
keystone.set('500', (err, req, res) => {
  let title;
  let message;

  if (err instanceof Error) {
    message = err.message;
    err = err.stack;
  }

  console.log(err);

  res.status(500).render('500', {
    err,
    errorTitle: title,
    errorMsg: message,
  });
});

// Import Route Controllers
// const routes = {
//   controllers: importRoutes('./controllers'),
//   api: importRoutes('./api'),
// };

// Setup Route Bindings
exports = module.exports = (app) => {
  // Allow cross-domain requests (development only)
  if (process.env.NODE_ENV !== 'production') {
    console.log('------------------------------------------------');
    console.log('Notice: Enabling CORS for development.');
    console.log('------------------------------------------------');
    app.all('*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  }

  // Render Initial HTML
  const renderFullPage = (html) => (
    `<!doctype html>
      <html>
        <head>
          <link rel='stylesheet' href='/styles/main.css' />
          <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        </head>
        <body>
          <section role="main" class="react-container">
            <div id="root">${html}</div>
          </section>
          <script src='/js/app.js'></script>
        </body>
      </html>`
    );

  // match the backend routes with the client routes
  app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const content = renderToString(<RouterContext {...renderProps} />);
        // res.status(200).render('index.jade', { html: content });
        // Use this if want to render from React Router
        // res.status(200).send(content);
        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(content));
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};
