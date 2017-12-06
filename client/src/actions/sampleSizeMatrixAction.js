import axios from 'axios';

import { getNewAndUpdatedRows, createAndUpdateRowsOfTable, getRemovedIds, deleteRowsOfTable } from '../lib/helper';

const url = '/samplesizematrix';

export const fetchSampleSizeMatrix = () => {
  return {
    type: 'FETCH_SAMPLE_SIZE_MATRIX',
    payload: axios.get(url)
  };
};

export const createAndUpdateSenarios = (changes, source, hotTable, foreignKeyValuePairs) => {
  return (dispatch) => {
    const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable, foreignKeyValuePairs);
    createAndUpdateRowsOfTable(newAndUpdatedRows, url, url, () => {
      dispatch(fetchSampleSizeMatrix());
    });
  };
};

export const deleteSenarios = (index, amount, hotTable) => {
  return () => {
    const removedIds = getRemovedIds(index, amount, hotTable);
    deleteRowsOfTable(removedIds, url);
  };
};
