const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.getAllProcesses = (req, res) => {
  const queryStr = 'SELECT * from processes WHERE company_id=2;'
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateProcess = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, 'processes');
};
