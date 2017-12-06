const db = require('../db/config');
const lib = require('../lib/helper');

const table = 'processes';

module.exports.fetchProcesses = (req, res) => {
  const queryStr = `SELECT * from ${table} WHERE company_id=2;`
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateProcesses = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, table);
};

module.exports.deleteProcesses = (req, res) => {
  lib.deleteRowsOfTable(req, res, table);
};
