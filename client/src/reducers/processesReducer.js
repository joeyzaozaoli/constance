import { GET_ALL_PROCESSES } from '../actions/processesAction';

const processesReducer = (state=[], action) => {
  switch (action.type) {
    case (GET_ALL_PROCESSES) :
      return action.payload.data;
    default :
      return state;
  }
};

export default processesReducer;
