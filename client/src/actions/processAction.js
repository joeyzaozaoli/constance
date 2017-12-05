import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

export const getProcesses = () => {
  const request = axios.get('/processes');
  return {
    type: 'GET_PROCESSES',
    payload: request
  };
};

export const getProcess = (proces) => { // avoid naming conflict with process
  return {
    type: 'GET_PROCESS',
    payload: [proces]
  };
};

export const createAndUpdateProcesses = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, '/processes', '/process', () => {
      dispatch(getProcesses());
    });
  };
};

export const deleteProcesses = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, '/processes');
  };
};


