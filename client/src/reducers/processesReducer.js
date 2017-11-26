import { GET_ALL_PROCESSES, GET_CURRENT_PROCESS } from '../actions/processesAction';

const processesReducer = (state={processes: [], currentProcess: {}}, action) => {
  switch (action.type) {
    case (GET_ALL_PROCESSES) :
      return Object.assign({}, state, {processes: action.payload.data});
    case (GET_CURRENT_PROCESS) :
      return Object.assign({}, state, {currentProcess: action.payload});
    default :
      return state;
  }
};

export default processesReducer;
