export const getNewAndUpdatedRows = (changes, source, hotTable) => {
  const newRows = [];
  const updatedRows = [];

  for (const change of changes) {
    const rowIndex = change[0]; // per spreadsheet
    const rowId = hotTable.hotInstance.getSourceDataAtRow(rowIndex).id; // per database
    const field = change[1];
    const newValue = change[3];
    const colIndex = hotTable.hotInstance.propToCol(change[1]); // per spreadsheet
    const cell = hotTable.hotInstance.getCell(rowIndex, colIndex);

    if (!cell.classList.value.split(' ').includes('htInvalid')) {
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

  for (const newRow of newRows) {
    if ('index' in newRow) {
      delete newRow.index;
    }
  }

  return {newRows, updatedRows};
};
