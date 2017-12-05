import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

export const fetchCompany = () => {
  const request = axios.get('/company');
  return {
    type: 'FETCH_COMPANY',
    payload: request
  };
};

export const updateCompany = (changes, source, hotTable) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);
    createAndUpdateRowsOfTable(newAndUpdatedRows, null, '/company', () => {
      dispatch(fetchCompany());
    });
  };
};
