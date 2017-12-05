const processReducer = (state={processes: [], process: []}, action) => {
  switch (action.type) {
    case ('FETCH_PROCESSES') :
      return Object.assign({}, state, {processes: action.payload.data});
    case ('FETCH_PROCESS') :
      return Object.assign({}, state, {process: action.payload});
    default :
      return state;
  }
};

export default processReducer;
