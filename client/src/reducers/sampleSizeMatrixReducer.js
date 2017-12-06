const sampleSizeMatrixReducer = (state={senarios: []}, action) => {
  switch (action.type) {
    case ('FETCH_SENARIOS') :
      return Object.assign({}, state, {senarios: action.payload.data});
    default :
      return state;
  }
};

export default sampleSizeMatrixReducer;
