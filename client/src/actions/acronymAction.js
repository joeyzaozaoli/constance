import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const url = '/acronyms';

export const fetchAcronyms = () => {
  return {
    type: 'FETCH_ACRONYMS',
    payload: axios.get(url)
  };
};

export const createAndUpdateAcronyms = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, url, url, () => {
      dispatch(fetchAcronyms());
    });
  };
};

export const deleteAcronyms = (index, amount, hotTable) => {
  return () => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, url);
  };
};
