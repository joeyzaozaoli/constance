const sampleSizeMatrixReducer = (state={sampleSizeMatrix: []}, action) => {
  switch (action.type) {
    case ('FETCH_SAMPLE_SIZE_MATRIX') :
      return Object.assign({}, state, {sampleSizeMatrix: action.payload.data});
    default :
      return state;
  }
};

export default sampleSizeMatrixReducer;
