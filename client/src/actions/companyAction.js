import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

export const getCompany = () => {
  const request = axios.get('/company');
  return {
    type: 'GET_COMPANY',
    payload: request
  };
};

export const updateCompany = (changes, source, hotTable) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);
    createAndUpdateRowsOfTable(newAndUpdatedRows, null, '/company', () => {
      dispatch(getCompany());
    });
  };
};
