const acronymReducer = (state={acronyms: []}, action) => {
  switch (action.type) {
    case ('FETCH_ACRONYMS') :
      return Object.assign({}, state, {acronyms: action.payload.data});
    default :
      return state;
  }
};

export default acronymReducer;
