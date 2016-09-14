'use strict';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from '../src/routes.js';
import Helmet from 'react-helmet';

// React And Redux Setup
import { configureStore } from '../src/store';
import { Provider } from 'react-redux';

import { fetchComponentData } from './util/fetchData';

// api
import posts from './api/home.routes';

// Setup Route Bindings
exports = module.exports = (app) => {
  // Setup API use
  app.use('/api', posts);

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
  const renderFullPage = (html, initialState) => {
    const head = Helmet.rewind();
    return (
      `<!doctype html>
        <html>
          <head>
            ${head.base.toString()}
            ${head.title.toString()}
            ${head.meta.toString()}
            ${head.link.toString()}
            ${head.script.toString()}
            <link rel='stylesheet' href='/styles/main.css' />
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
            <title>Unimer Landing</title>
          </head>
          <body>
            <section role="main" class="react-container">
              <div id="root">${html}</div>
            </section>
            <script src='/js/app.js'></script>
          </body>
      </html>`
    );
  };

  // match the backend routes with the client routes
  app.use((req, res, next) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      }
      if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      // if (!renderProps) {
      //   res.status(404).send('Not found');
      // }

      console.log('RENDERPROPS', renderProps);

      const store = configureStore();
      return fetchComponentData(store, renderProps.components, renderProps.params)
        .then(() => {
          const initialView = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          const finalState = store.getState();

          res
            .set('Content-Type', 'text/html')
            .status(200)
            .end(renderFullPage(initialView, finalState));
        })
        .catch((_error) => next(_error));
    });
  });
};
