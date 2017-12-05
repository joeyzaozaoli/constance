const router = require('express').Router();

const company = require('./controllers/company');
const proces = require('./controllers/process'); // avoid naming conflict with process
const controlOwner = require('./controllers/controlOwner');
const acronym = require('./controllers/acronym');

router.get('/company', company.fetchCompany);
router.put('/company', company.updateCompany);

router.get('/processes', proces.fetchProcesses);
router.post('/processes', proces.createAndUpdateProcesses);
router.put('/process', proces.createAndUpdateProcesses);
router.delete('/processes', proces.deleteProcesses);

router.get('/controlowners', controlOwner.fetchControlOwners);
router.post('/controlowners', controlOwner.createAndUpdateControlOwners);
router.put('/controlowner', controlOwner.createAndUpdateControlOwners);

router.get('/acronyms', acronym.fetchAcronyms);
router.post('/acronyms', acronym.createAndUpdateAcronyms);
router.put('/acronym', acronym.createAndUpdateAcronyms);

router.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
