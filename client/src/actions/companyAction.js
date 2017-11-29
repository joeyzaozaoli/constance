import axios from 'axios';

import { getNewAndUpdatedRows } from '../lib/helper';

export const GET_COMPANY = 'GET_COMPANY';
export const getCompany = () => {
  const request = axios.get('/api/company');
  return {
    type: GET_COMPANY,
    payload: request
  };
};

export const updateCompany = (changes, source, hotTable) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);

    if (newAndUpdatedRows) {
      const updatedRows = newAndUpdatedRows.updatedRows;

      if (updatedRows.length > 0) {
        axios.put('/company', {updatedRows})
        .then(() => {
          dispatch(getCompany());
        });
      }
    }
  };
};
