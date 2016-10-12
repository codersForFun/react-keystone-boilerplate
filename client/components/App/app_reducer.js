// Import Actions
import { TOGGLE_ADD_POST } from './app_actions';

// Initial State
const initialState = {
  showAddPost: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };

    default:
      return state;
  }
};

// Export Reducer
export default AppReducer;
