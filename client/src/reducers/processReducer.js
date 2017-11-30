import { GET_ALL_PROCESSES, GET_PROCESS } from '../actions/processAction';

const processReducer = (state={processes: [], process: []}, action) => {
  switch (action.type) {
    case (GET_ALL_PROCESSES) :
      return Object.assign({}, state, {processes: action.payload.data});
    case (GET_PROCESS) :
      return Object.assign({}, state, {process: action.payload});
    default :
      return state;
  }
};

export default processReducer;
