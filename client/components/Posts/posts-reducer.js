// Import Actions
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULFILLED } from './posts-actions';

// Initial State
const initialState = {
  posts: [],
  fetching: false,
  fetched: false
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {...state, fetching: true};
    case FETCH_POSTS_FULFILLED:
      return {...state, fetching: false, fetched: true, posts: action.payload};
    default:
      return state;
  }
};

// Export Reducer
export default PostsReducer;
