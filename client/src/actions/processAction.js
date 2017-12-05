import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const plUrl = '/processes';
const sgUrl = '/process';

export const fetchProcesses = () => {
  const request = axios.get(plUrl);
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
    createAndUpdateRowsOfTable(newAndUpdatedRows, plUrl, sgUrl, () => {
      dispatch(fetchProcesses());
    });
  };
};

export const deleteProcesses = (index, amount, hotTable) => {
  return (dispatch) => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, plUrl);
  };
};


