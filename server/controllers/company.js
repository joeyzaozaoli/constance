const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.getCompany = (req, res) => {
  const queryStr = 'SELECT * from companies WHERE id=2;'
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.updateCompany = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, 'companies');
};

