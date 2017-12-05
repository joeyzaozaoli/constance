const companyReducer = (state=[], action) => {
  switch (action.type) {
    case ('FETCH_COMPANY') :
      return action.payload.data;
    default :
      return state;
  }
};

export default companyReducer;
