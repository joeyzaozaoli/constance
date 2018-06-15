import axios from 'axios';

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  CRUD Operation : C & U
* * * * * * * * * * * * * * * * * * * * * * * * * * */

export const getNewAndUpdatedRows = (changes, source, hotTable, foreignKeyValuePairs) => {
  // create empty hash tables to store new rows and updated rows, respectively
  const newRowsObj = {};
  const updatedRowsObj = {};

  for (const change of changes) {
    const rowIndex = change[0]; // index per spreadsheet
    const rowId = hotTable.getDataAtRow(rowIndex)[0]; // id per database
    const field = change[1];
    const newValue = change[3];
    const colIndex = hotTable.propToCol(field);
    const cell = hotTable.getCell(rowIndex, colIndex);

    // if change is of valid data type
    if (!cell.classList.value.split(' ').includes('htInvalid')) {
      // if change is adding a new row
      if (!rowId) {
        if (!newRowsObj[rowIndex]) {
          let newRow = {};
          newRow[field] = newValue;
          newRowsObj[rowIndex] = newRow;
        } else {
          let newRow = newRowsObj[rowIndex];
          newRow[field] = newValue;
        }
      // otherwise, if change is updating an existing row
      } else {
        if (!updatedRowsObj[rowId]) {
          let updatedRow = {id: rowId};
          updatedRow[field] = newValue;
          updatedRowsObj[rowId] = updatedRow;
        } else {
          let updatedRow = updatedRowsObj[rowId];
          updatedRow[field] = newValue;
        }
      }
    }
  }

  const newRows = Object.values(newRowsObj);
  const updatedRows = Object.values(updatedRowsObj);

  if (newRows.length > 0) {
    for (const newRow of newRows) {
      // add foreign key-value pairs
      if (foreignKeyValuePairs) { Object.assign(newRow, ...foreignKeyValuePairs); }
    }
  }

  if (newRows.length > 0 || updatedRows.length > 0) {
    return {newRows, updatedRows};
  }
};

export const createAndUpdateRowsOfTable = (newAndUpdatedRows, postUrl, putUrl, cb) => {
  if (newAndUpdatedRows) {
    if (postUrl) {
      const newRows = newAndUpdatedRows.newRows;
      if (newRows.length > 0) {
        axios.post(postUrl, {newRows})
        .then(cb);
      }
    }

    if (putUrl) {
      const updatedRows = newAndUpdatedRows.updatedRows;
      if (updatedRows.length > 0) {
        axios.put(putUrl, {updatedRows})
        .then(cb);
      }
    }
  }
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  CRUD Operation : D
* * * * * * * * * * * * * * * * * * * * * * * * * * */

export const getRemovedIds = (index, amount, hotTable) => {
  const selected = hotTable.getSelected();
  const startRowIndex = selected[0];
  const endRowIndex = selected[2];
  const lowRowIndex = Math.min(startRowIndex, endRowIndex);
  const highRowIndex = Math.max(startRowIndex, endRowIndex);

  const removedIds = [];
  for (let rowIndex = lowRowIndex; rowIndex <= highRowIndex; rowIndex++) {
    const rowId = hotTable.getDataAtRow(rowIndex)[0];
    removedIds.push(rowId);
  }
  return removedIds;
};

export const deleteRowsOfTable = (removedIds, deleteUrl, cb) => {
  axios({
    method: 'DELETE',
    url: deleteUrl,
    data: {removedIds}
  })
  .then(cb);
};

