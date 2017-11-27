const router = require('express').Router();

const proces = require('./controllers/process'); // avoid naming conflict with process

router.get('/api/processes', proces.getAllProcesses);
router.post('/process', proces.createAndUpdateProcess);
router.put('/process', proces.createAndUpdateProcess);

module.exports = router;
