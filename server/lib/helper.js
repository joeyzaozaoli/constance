const db = require('../db/config');

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  CRUD Operation : C & U
* * * * * * * * * * * * * * * * * * * * * * * * * * */

const getFieldsArr = (row) => {
  const fieldsArr = Object.keys(row);

  return fieldsArr;
};

const getFields = (fieldsArr) => {
  const fields = fieldsArr.join(', ');

  return fields;
};

const getValues = (row, fieldsArr) => {
  const valuesArr = fieldsArr.map((field) => { return row[field]; });

  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i] === '' || valuesArr[i] === null) { // handle empty values
      valuesArr[i] = 'null';
    }
    if (typeof(valuesArr[i]) === 'string' && valuesArr[i] !== 'null') {
      valuesArr[i] = `'${valuesArr[i]}'`;
    }
  }

  const values = valuesArr.join(', ');

  return values;
};

const getUpdateQuery = (fieldsArr) => {
  for (let i = 0; i < fieldsArr.length; i++) {
    fieldsArr[i] = `${fieldsArr[i]}=VALUES(${fieldsArr[i]})`;
  }

  const updateQuery = fieldsArr.join(', ');

  return updateQuery;
};


module.exports.createAndUpdateRowsOfTable = (req, res, table) => {
  let rows;
  if (req.method === 'POST') {
    rows = req.body.newRows;
  } else if (req.method === 'PUT') {
    rows = req.body.updatedRows;
  }

  for (const row of rows) {
    const fieldsArr = getFieldsArr(row);
    const fields = getFields(fieldsArr);
    const values = getValues(row, fieldsArr);

    if (req.method === 'POST') {
      db.query(`INSERT INTO ${table}(${fields}) VALUES (${values});`);
    } else if (req.method === 'PUT') {
      const updateQuery = getUpdateQuery(fieldsArr);
      db.query(`INSERT INTO ${table}(${fields}) VALUES (${values}) ON DUPLICATE KEY UPDATE ${updateQuery};`);
    }
  }

  res.sendStatus(201);
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  CRUD Operation : D
* * * * * * * * * * * * * * * * * * * * * * * * * * */

module.exports.deleteRowsOfTable = (req, res, table) => {
  const removedIds = req.body.removedIds;

  db.query(`DELETE FROM ${table} WHERE id IN (${removedIds});`, (err) => {
    if (!err) { res.sendStatus(200); }
  });
};

