import { GET_COMPANY } from '../actions/companyAction';

const companyReducer = (state=[], action) => {
  switch (action.type) {
    case (GET_COMPANY) :
      return action.payload.data;
    default :
      return state;
  }
};

export default companyReducer;
