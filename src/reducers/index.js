import { combineReducers } from 'redux';

import userReducer from './userReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  todos: () => []
});

export default rootReducer;
