const db = require('../db/config');
const lib = require('../lib/helper');

const table = 'companies';

module.exports.fetchCompany = (req, res) => {
  const queryStr = `SELECT * from ${table} WHERE id=2;`
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.updateCompany = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, table);
};

