import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const url = '/samplesizematrix';

export const fetchSenarios = () => {
  return {
    type: 'FETCH_SENARIOS',
    payload: axios.get(url)
  };
};

export const createAndUpdateSenarios = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, url, url, () => {
      dispatch(fetchSenarios());
    });
  };
};

export const deleteSenarios = (index, amount, hotTable) => {
  return () => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, url);
  };
};
