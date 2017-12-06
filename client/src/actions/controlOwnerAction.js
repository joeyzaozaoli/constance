import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const plUrl = '/controlowners';
const sgUrl = '/controlowner';

export const fetchControlOwners = () => {
  const request = axios.get(plUrl);
  return {
    type: 'FETCH_CONTROL_OWNERS',
    payload: request
  };
};

export const createAndUpdateControlOwners = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, plUrl, sgUrl, () => {
      dispatch(fetchControlOwners());
    });
  };
};

export const deleteControlOwners = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, plUrl);
  };
};

