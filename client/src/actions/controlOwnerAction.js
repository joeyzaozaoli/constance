import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const url = '/controlowners';

export const fetchControlOwners = () => {
  return {
    type: 'FETCH_CONTROL_OWNERS',
    payload: axios.get(url)
  };
};

export const createAndUpdateControlOwners = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, url, url, () => {
      dispatch(fetchControlOwners());
    });
  };
};

export const deleteControlOwners = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, url);
  };
};

