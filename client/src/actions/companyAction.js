import axios from 'axios';

import { createAndUpdateRowsOfTable } from '../lib/helper';

export const GET_COMPANY = 'GET_COMPANY';
export const getCompany = () => {
  const request = axios.get('/company');
  return {
    type: GET_COMPANY,
    payload: request
  };
};

export const updateCompany = (changes, source, hotTable) => {
  return (dispatch) => {
    createAndUpdateRowsOfTable(changes, source, hotTable, null, '/company', () => {
      dispatch(getCompany());
    });
  };
};
