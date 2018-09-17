import { combineReducers } from 'redux';
import WeatrherReducer from './reducer_weather'


const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatrherReducer
});

export default rootReducer;
