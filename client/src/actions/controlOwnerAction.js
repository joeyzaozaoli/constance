import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

export const fetchControlOwners = () => {
  const request = axios.get('/controlowners');
  return {
    type: 'FETCH_CONTROL_OWNERS',
    payload: request
  };
};

export const createAndUpdateControlOwners = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, '/controlowners', '/controlowner', () => {
      dispatch(fetchControlOwners());
    });
  };
};

