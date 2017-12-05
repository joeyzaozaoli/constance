import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

export const fetchProcesses = () => {
  const request = axios.get('/processes');
  return {
    type: 'FETCH_PROCESSES',
    payload: request
  };
};

export const fetchProcess = (proces) => { // avoid naming conflict with process
  return {
    type: 'FETCH_PROCESS',
    payload: [proces]
  };
};

export const createAndUpdateProcesses = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, '/processes', '/process', () => {
      dispatch(fetchProcesses());
    });
  };
};

export const deleteProcesses = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, '/processes');
  };
};


