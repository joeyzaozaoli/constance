const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'constance'
});

db.connect( (err) => {
  if (!err) { console.log('Database connection success'); }
});

module.exports = db;
