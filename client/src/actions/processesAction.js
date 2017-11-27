import axios from 'axios';

import { getNewAndUpdatedRows } from '../lib/helper';

export const GET_ALL_PROCESSES = 'GET_ALL_PROCESSES';
export const GET_CURRENT_PROCESS = 'GET_CURRENT_PROCESS';

export const getAllProcesses = () => {
  const request = axios.get('/api/processes');
  return {
    type: GET_ALL_PROCESSES,
    payload: request
  };
};

export const getCurrentProcess = (processe) => {
  return {
    type: GET_CURRENT_PROCESS,
    payload: processe
  }
};

export const createAndUpdateProcess = (changes, source, hotTable) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);

    if (newAndUpdatedRows) {
      const newRows = newAndUpdatedRows.newRows;
      const updatedRows = newAndUpdatedRows.updatedRows;

      if (newRows.length > 0) {
        axios.post('/process', {newRows})
        .then(() => {
          dispatch(getAllProcesses());
        });
      }

      if (updatedRows.length > 0) {
        axios.put('/process', {updatedRows})
        .then(() => {
          dispatch(getAllProcesses());
        });
      }
    }
  };
};
