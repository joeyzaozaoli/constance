import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const plUrl = '/acronyms';
const sgUrl = '/acronym';

export const fetchAcronyms = () => {
  const request = axios.get(plUrl);
  return {
    type: 'FETCH_ACRONYMS',
    payload: request
  };
};

export const createAndUpdateAcronyms = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, plUrl, sgUrl, () => {
      dispatch(fetchAcronyms());
    });
  };
};

export const deleteAcronyms = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, plUrl);
  };
};
