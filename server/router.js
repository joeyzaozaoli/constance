const router = require('express').Router();

const company = require('./controllers/company');
const proces = require('./controllers/process'); // avoid naming conflict with process

router.get('/api/company', company.getCompany);
router.put('/company', company.updateCompany);

router.get('/api/processes', proces.getAllProcesses);
router.post('/process', proces.createAndUpdateProcess);
router.put('/process', proces.createAndUpdateProcess);

module.exports = router;
