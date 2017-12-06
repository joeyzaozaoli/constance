import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const url = '/processes';

export const fetchProcesses = () => {
  return {
    type: 'FETCH_PROCESSES',
    payload: axios.get(url)
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
    createAndUpdateRowsOfTable(newAndUpdatedRows, url, url, () => {
      dispatch(fetchProcesses());
    });
  };
};

export const deleteProcesses = (index, amount, hotTable) => {
  return () => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, url);
  };
};


