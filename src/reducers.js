/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './components/App/app_reducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
});
