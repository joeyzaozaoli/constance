module.exports.getFieldsArr = (row) => {
  const fieldsArr = Object.keys(row);

  return fieldsArr;
};

module.exports.getFields = (fieldsArr) => {
  const fields = fieldsArr.join(', ');

  return fields;
};

module.exports.getValues = (row, fieldsArr) => {
  let values = fieldsArr.map((field) => { return row[field]; });
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null || values[i] === '') { // handle empty cells
      values[i] = 'null';
    }
    if (typeof(values[i]) === 'string' && values[i] !== 'null') {
      values[i] = `"${values[i]}"`;
    }
  }
  values = values.join(', ');

  return values;
};

module.exports.getUpdateQuery = (fieldsArr) => {
  for (let i = 0; i < fieldsArr.length; i++) {
    fieldsArr[i] = `${fieldsArr[i]}=VALUES(${fieldsArr[i]})`;
  }
  const updateQuery = fieldsArr.join(', ');

  return updateQuery;
};

