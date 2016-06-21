import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: () => { return {};},
  todos: () => []
});

export default rootReducer;
