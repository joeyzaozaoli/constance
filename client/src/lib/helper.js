import axios from 'axios';

const getNewAndUpdatedRows = (changes, source, hotTable) => {
  const newRows = [];
  const updatedRows = [];

  for (const change of changes) {
    const rowIndex = change[0]; // index per spreadsheet
    const rowId = hotTable.hotInstance.getSourceDataAtRow(rowIndex).id; // id per database
    const field = change[1];
    const newValue = change[3];
    const colIndex = hotTable.hotInstance.propToCol(field);
    const cell = hotTable.hotInstance.getCell(rowIndex, colIndex);

    // if change is of valid data type
    if (!cell.classList.value.split(' ').includes('htInvalid')) {
      // if change's corresponding row was empty prior to change
      if (rowId === null) {
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

  // delete row index before sending to server
  if (newRows.length > 0) {
    for (const newRow of newRows) {
      if ('index' in newRow) { delete newRow.index; }
    }
  }

  if (newRows.length > 0 || updatedRows.length > 0) {
    return {newRows, updatedRows};
  }
};

export const createAndUpdateRowsOfTable = (changes, source, hotTable, postUrl, putUrl, cb) => {
  const newAndUpdatedRows = getNewAndUpdatedRows(changes, source, hotTable);

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

