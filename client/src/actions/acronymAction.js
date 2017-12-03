import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

export const getAcronyms = () => {
  const request = axios.get('/acronyms');
  return {
    type: 'GET_ACRONYMS',
    payload: request
  };
};

export const createAndUpdateAcronyms = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, '/acronyms', '/acronym', () => {
      dispatch(getAcronyms());
    });
  };
};

