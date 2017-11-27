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
    const fields = lib.getFields(fieldsArr);
    const values = lib.getValues(row, fieldsArr);

    if (req.method === 'POST') {
      db.query(`INSERT INTO processes(${fields}) VALUES (${values});`);
    } else if (req.method === 'PUT') {
      const updateQuery = lib.getUpdateQuery(fieldsArr);
      db.query(`INSERT INTO processes(${fields}) VALUES (${values}) ON DUPLICATE KEY UPDATE ${updateQuery};`);
    }
  }

  res.sendStatus(201);
};
