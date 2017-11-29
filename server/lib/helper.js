module.exports.getFieldsArr = (row) => {
  const fieldsArr = Object.keys(row);

  return fieldsArr;
};

module.exports.getFieldsStr = (fieldsArr) => {
  const fieldsStr = fieldsArr.join(', ');

  return fieldsStr;
};

module.exports.getValuesStr = (row, fieldsArr) => {
  const valuesArr = fieldsArr.map((field) => { return row[field]; });

  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i] === '' || valuesArr[i] === null) { // handle empty values
      valuesArr[i] = 'null';
    }
    if (typeof(valuesArr[i]) === 'string' && valuesArr[i] !== 'null') {
      valuesArr[i] = `'${valuesArr[i]}'`;
    }
  }

  const valuesStr = valuesArr.join(', ');

  return valuesStr;
};

module.exports.getUpdateQuery = (fieldsArr) => {
  for (let i = 0; i < fieldsArr.length; i++) {
    fieldsArr[i] = `${fieldsArr[i]}=VALUES(${fieldsArr[i]})`;
  }

  const updateQuery = fieldsArr.join(', ');

  return updateQuery;
};

