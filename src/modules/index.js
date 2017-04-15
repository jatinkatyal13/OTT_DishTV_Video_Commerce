import { combineReducers } from 'redux';
import counter from './counter';
import about from './about';

const rootReducer = combineReducers({
  counter,
  about,
});

export default rootReducer;