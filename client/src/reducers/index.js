import { combineReducers } from 'redux';

import companyReducer from './companyReducer';
import processReducer from './processReducer';

const reducers = combineReducers({
  company: companyReducer,
  process: processReducer
});

export default reducers;
