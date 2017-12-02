import { combineReducers } from 'redux';

import companyReducer from './companyReducer';
import processReducer from './processReducer';
import controlOwnerReducer from './controlOwnerReducer';
import acronymReducer from './acronymReducer';

const reducers = combineReducers({
  company: companyReducer,
  process: processReducer,
  controlOwner: controlOwnerReducer,
  acronym: acronymReducer
});

export default reducers;
