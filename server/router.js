const router = require('express').Router();

const company = require('./controllers/company');
const proces = require('./controllers/process'); // avoid naming conflict with process
const controlOwner = require('./controllers/controlOwner');
const acronym = require('./controllers/acronym');

router.get('/company', company.getCompany);
router.put('/company', company.updateCompany);

router.get('/processes', proces.getProcesses);
router.post('/process', proces.createAndUpdateProcesses);
router.put('/process', proces.createAndUpdateProcesses);

router.get('/controlowners', controlOwner.getControlOwners);
router.post('/controlowner', controlOwner.createAndUpdateControlOwners);
router.put('/controlowner', controlOwner.createAndUpdateControlOwners);

router.get('/acronyms', acronym.getAcronyms);
router.post('/acronym', acronym.createAndUpdateAcronyms);
router.put('/acronym', acronym.createAndUpdateAcronyms);

module.exports = router;
