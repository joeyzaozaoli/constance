module.exports.getFieldsArr = (row) => {
  let fieldsArr = Object.keys(row);

  return fieldsArr;
};

module.exports.getFields = (fieldsArr) => {
  let fields = fieldsArr.join(', ');

  return fields;
};

module.exports.getValues = (row, fieldsArr) => {
  let values = fieldsArr.map((field) => { return row[field]; });
  for (let i = 0; i < values.length; i++) {
    // handle empty cells
    if (values[i] === null || values[i] === '') {
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
  let updateQuery = fieldsArr.join(', ');

  return updateQuery;
};

