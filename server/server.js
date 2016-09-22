import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { configureStore } from '../client/store';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';
import serverConfig from '../server/config';
import pkg from '../package.json';

// api
import posts from './api/home.routes';

// ignore requesting file .scss
require.extensions['.scss'] = () => {
  return;
};

// Initialize the Express App
const app = new Express();

// Setup API use
app.use('/api', posts);

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist')));

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
          <link rel='stylesheet' href='/styles/style.css' />
          <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
          <title>${pkg.name}</title>
        </head>
        <body>
          <section role="main" class="react-container">
            <div id="root">${html}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
          </section>
          <script src='/js/bundle.js'></script>
        </body>
    </html>`
  );
};

const renderError = (err) => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// match the backend routes with the client routes
app.use((req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) res.status(500).end(renderError(error));
    if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    if (!renderProps) return next();

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
    .catch(_error => next(_error));
  });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`App is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});
