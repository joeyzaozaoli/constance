import axios from 'axios';

export const getNewAndUpdatedRows = (changes, source, hotTable, foreignKeyValuePairs) => {
  const newRows = [];
  const updatedRows = [];

  for (const change of changes) {
    const rowIndex = change[0]; // index per spreadsheet
    const rowId = hotTable.getDataAtRow(rowIndex)[0]; // id per database
    const field = change[1];
    const newValue = change[3];
    const colIndex = hotTable.propToCol(field);
    const cell = hotTable.getCell(rowIndex, colIndex);

    // if change is of valid data type
    if (!cell.classList.value.split(' ').includes('htInvalid')) {
      // if change's corresponding row was empty prior to change
      if (!rowId) {
        let found = false;

        for (const newRow of newRows) {
          if (newRow.index === rowIndex) {
            newRow[field] = newValue;
            found = true;
            break;
          }
        }

        if (!found) {
          const newRow = {index: rowIndex};
          newRow[field] = newValue;
          newRows.push(newRow);
        }
      // if change's corresponding row was NOT empty prior to change
      } else {
        let found = false;

        for (const updatedRow of updatedRows) {
          if (updatedRow.id === rowId) {
            updatedRow[field] = newValue;
            found = true;
            break;
          }
        }

        if (!found) {
          const updatedRow = {id: rowId};
          updatedRow[field] = newValue;
          updatedRows.push(updatedRow);
        }
      }
    }
  }

  if (newRows.length > 0) {
    for (const newRow of newRows) {
      // remove row index
      delete newRow.index;
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

export const getRemovedIds = (index, amount, hotTable) => {
  const selectedRows = hotTable.getSelected();
  const startRowIndex = selectedRows[0];
  const endRowIndex = selectedRows[2];
  const smallestRowIndex = Math.min(startRowIndex, endRowIndex);
  const biggestRowIndex = Math.max(startRowIndex, endRowIndex);

  const removedIds = [];
  for (let rowIndex = smallestRowIndex; rowIndex <= biggestRowIndex; rowIndex++) {
    const rowId = hotTable.getDataAtRow(rowIndex)[0];
    removedIds.push(rowId);
  }
  return removedIds;
};

export const deleteRowsOfTable = (removedIds, deleteUrl) => {
  axios({
    method: 'DELETE',
    url: deleteUrl,
    data: {removedIds}
  });
};

