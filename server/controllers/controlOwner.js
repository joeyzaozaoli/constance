const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.getControlOwners = (req, res) => {
  const queryStr = 'SELECT * from controlOwners WHERE company_id=2;'
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateControlOwners = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, 'controlOwners');
};
