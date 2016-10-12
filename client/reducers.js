/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './components/App/app_reducer';
import posts from './components/Posts/posts-reducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts
});
