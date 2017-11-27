import { combineReducers } from 'redux';

import processReducer from './processReducer';

const reducers = combineReducers({
  process: processReducer
});

export default reducers;
