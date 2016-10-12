/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

export function configureStore (initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(promise(), thunk, logger())
  ];

  const store = createStore(reducers, initialState, compose(...enhancers));
  return store;
}
