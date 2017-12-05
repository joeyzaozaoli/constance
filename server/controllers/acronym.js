const db = require('../db/config');
const lib = require('../lib/helper');

module.exports.fetchAcronyms = (req, res) => {
  const queryStr = 'SELECT * from acronyms WHERE company_id=2;'
  db.query(queryStr, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};

module.exports.createAndUpdateAcronyms = (req, res) => {
  lib.createAndUpdateRowsOfTable(req, res, 'acronyms');
};

module.exports.deleteAcronyms = (req, res) => {
  lib.deleteRowsOfTable(req, res, 'acronyms');
};

