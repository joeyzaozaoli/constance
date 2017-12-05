import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

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


