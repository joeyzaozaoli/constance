const controlOwnerReducer = (state={controlOwners: []}, action) => {
  switch (action.type) {
    case ('GET_CONTROL_OWNERS') :
      return Object.assign({}, state, {controlOwners: action.payload.data});
    default :
      return state;
  }
};

export default controlOwnerReducer;
