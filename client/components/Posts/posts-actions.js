import axios from 'axios';

// Export Constants
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';

// Export Actions
export function fetchPosts () {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_POSTS',
      payload: axios.get('/api/posts').then((res) => {
        return { posts: res.data };
      })
    });
  };
}
