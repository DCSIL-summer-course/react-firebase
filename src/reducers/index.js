import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import messageReducer from './messageReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer
});

export default rootReducer;
