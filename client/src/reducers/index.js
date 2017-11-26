import { combineReducers } from 'redux';

import processesReducer from './processesReducer';

const reducers = combineReducers({
  processes: processesReducer
});

export default reducers;
