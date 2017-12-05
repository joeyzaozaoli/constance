const controlOwnerReducer = (state={controlOwners: []}, action) => {
  switch (action.type) {
    case ('FETCH_CONTROL_OWNERS') :
      return Object.assign({}, state, {controlOwners: action.payload.data});
    default :
      return state;
  }
};

export default controlOwnerReducer;
