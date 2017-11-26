const db = require('../db/config');

module.exports.getAllProcesses = (req, res) => {
  db.query('SELECT * from processes WHERE company_id=2;', (err, rows) => {
    if (!err) { res.json(rows); }
  });
};
