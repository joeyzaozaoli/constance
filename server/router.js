const router = require('express').Router();

const processes = require('./controllers/processes');

router.get('/api/processes', processes.getAllProcesses);

module.exports = router;
