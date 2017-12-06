import { combineReducers } from 'redux';

import companyReducer from './companyReducer';
import processReducer from './processReducer';
import controlOwnerReducer from './controlOwnerReducer';
import acronymReducer from './acronymReducer';
import sampleSizeMatrixReducer from './sampleSizeMatrixReducer';

const reducers = combineReducers({
  company: companyReducer,
  process: processReducer,
  controlOwner: controlOwnerReducer,
  acronym: acronymReducer,
  sampleSizeMatrix: sampleSizeMatrixReducer
});

export default reducers;
