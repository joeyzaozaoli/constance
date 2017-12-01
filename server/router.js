const router = require('express').Router();

const company = require('./controllers/company');
const proces = require('./controllers/process'); // avoid naming conflict with process
const controlOwner = require('./controllers/controlOwner');

router.get('/company', company.getCompany);
router.put('/company', company.updateCompany);

router.get('/processes', proces.getAllProcesses);
router.post('/process', proces.createAndUpdateProcess);
router.put('/process', proces.createAndUpdateProcess);

router.get('/controlowners', controlOwner.getControlOwners);
router.post('/controlowner', controlOwner.createAndUpdateControlOwners);
router.put('/controlowner', controlOwner.createAndUpdateControlOwners);

module.exports = router;
