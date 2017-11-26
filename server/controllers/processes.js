const db = require('../db/config');

module.exports.getAllProcesses = (req, res) => {
  db.query('SELECT * from processes', (err, rows) => {
    if (!err) { res.json(rows); }
  });
};
