const db = require('../db/config');

module.exports.getAllProcesses = (req, res) => {
  const queryString = 'SELECT * from processes WHERE company_id=2;'
  db.query(queryString, (err, rows) => {
    if (!err) { res.json(rows); }
  });
};
