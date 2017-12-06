import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

const url = '/company';

export const fetchCompany = () => {
  return {
    type: 'FETCH_COMPANY',
    payload: axios.get(url)
  };
};

export const updateCompany = (changes, source, hotTable) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);
    createAndUpdateRowsOfTable(newAndUpdatedRows, null, url, () => {
      dispatch(fetchCompany());
    });
  };
};
