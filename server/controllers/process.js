const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.getProcesses = (req, res) => {
  const queryStr = 'SELECT * from processes WHERE company_id=2;'
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateProcesses = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, 'processes');
};
