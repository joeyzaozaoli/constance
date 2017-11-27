const router = require('express').Router();

const processes = require('./controllers/processes');

router.get('/api/processes', processes.getAllProcesses);
router.post('/process', processes.createAndUpdateProcess);
router.put('/process', processes.createAndUpdateProcess);

module.exports = router;
