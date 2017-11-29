const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.getAllProcesses = (req, res) => {
  const queryString = 'SELECT * from processes WHERE company_id=2;'
  db.query(queryString, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateProcess = (req, res) => {
  let rows;
  if (req.method === 'POST') {
    rows = req.body.newRows;
  } else if (req.method === 'PUT') {
    rows = req.body.updatedRows;
  }

  for (const row of rows) {
    const fieldsArr = lib.getFieldsArr(row);
    const fieldsStr = lib.getFieldsStr(fieldsArr);
    const valuesStr = lib.getValuesStr(row, fieldsArr);

    if (req.method === 'POST') {
      db.query(`INSERT INTO processes(${fieldsStr}) VALUES (${valuesStr});`);
    } else if (req.method === 'PUT') {
      const updateQuery = lib.getUpdateQuery(fieldsArr);
      db.query(`INSERT INTO processes(${fieldsStr}) VALUES (${valuesStr}) ON DUPLICATE KEY UPDATE ${updateQuery};`);
    }
  }

  res.sendStatus(201);
};
