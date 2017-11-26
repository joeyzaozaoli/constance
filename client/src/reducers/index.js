import { combineReducers } from 'redux';

import processesReducer from './processesReducer';

const reducers = combineReducers({
  process: processesReducer
});

export default reducers;
