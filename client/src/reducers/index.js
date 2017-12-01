import { combineReducers } from 'redux';

import companyReducer from './companyReducer';
import processReducer from './processReducer';
import controlOwnerReducer from './controlOwnerReducer';

const reducers = combineReducers({
  company: companyReducer,
  process: processReducer,
  controlOwner: controlOwnerReducer
});

export default reducers;
