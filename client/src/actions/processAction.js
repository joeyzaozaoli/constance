import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable } from '../lib/helper';

export const GET_ALL_PROCESSES = 'GET_ALL_PROCESSES';
export const getAllProcesses = () => {
  const request = axios.get('/processes');
  return {
    type: GET_ALL_PROCESSES,
    payload: request
  };
};

export const GET_PROCESS = 'GET_PROCESS';
export const getProcess = (proces) => { // avoid naming conflict with process
  return {
    type: GET_PROCESS,
    payload: [proces]
  };
};

export const createAndUpdateProcess = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, '/process', '/process', () => {
      dispatch(getAllProcesses());
    });
  };
};


