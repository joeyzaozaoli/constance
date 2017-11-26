export const getNewAndUpdatedRows = (changes, source, hotTable) => {
  if (changes && source !== 'loadData') {
    const newRows = [];
    const updatedRows = [];

    for (let change of changes) {
      let rowIndex = change[0]; // per spreadsheet
      let rowId = hotTable.hotInstance.getSourceDataAtRow(rowIndex).id; // per database
      let field = change[1];
      let newValue = change[3];
      let colIndex = hotTable.hotInstance.propToCol(change[1]); // per spreadsheet
      let cell = hotTable.hotInstance.getCell(rowIndex, colIndex);

      if (!cell.classList.value.split(' ').includes('htInvalid')) {
        if (rowId === null) {
          let found = false;

          for (let newRow of newRows) {
            if (newRow.index === rowIndex) {
              newRow[field] = newValue;
              found = true;
              break;
            }
          }

          if (!found) {
            let newRow = {index: rowIndex};
            newRow[field] = newValue;
            newRows.push(newRow);
          }

        } else {
          let found = false;

          for (let updatedRow of updatedRows) {
            if (updatedRow.id === rowId) {
              updatedRow[field] = newValue;
              found = true;
              break;
            }
          }

          if (!found) {
            let updatedRow = {id: rowId};
            updatedRow[field] = newValue;
            updatedRows.push(updatedRow);
          }
        }
      }
    }

    for (let newRow of newRows) {
      if ('index' in newRow) {
        delete newRow.index;
      }
    }

    return {newRows, updatedRows};
  }
};
