const router = require('express').Router();

const company = require('./controllers/company');
const proces = require('./controllers/process'); // avoid naming conflict with process
const controlOwner = require('./controllers/controlOwner');
const acronym = require('./controllers/acronym');
const sampleSizeMatrix = require('./controllers/sampleSizeMatrix');

const urlForCompany = '/company';
const urlForProcesses = '/processes';
const urlForControlOwners = '/controlowners';
const urlForAcronyms = '/acronyms';
const urlForSampleSizeMatrix = '/samplesizematrix';

router.get(urlForCompany, company.fetchCompany);
router.put(urlForCompany, company.updateCompany);

router.get(urlForProcesses, proces.fetchProcesses);
router.post(urlForProcesses, proces.createAndUpdateProcesses);
router.put(urlForProcesses, proces.createAndUpdateProcesses);
router.delete(urlForProcesses, proces.deleteProcesses);

router.get(urlForControlOwners, controlOwner.fetchControlOwners);
router.post(urlForControlOwners, controlOwner.createAndUpdateControlOwners);
router.put(urlForControlOwners, controlOwner.createAndUpdateControlOwners);
router.delete(urlForControlOwners, controlOwner.deleteControlOwners);

router.get(urlForAcronyms, acronym.fetchAcronyms);
router.post(urlForAcronyms, acronym.createAndUpdateAcronyms);
router.put(urlForAcronyms, acronym.createAndUpdateAcronyms);
router.delete(urlForAcronyms, acronym.deleteAcronyms);

router.get(urlForSampleSizeMatrix, sampleSizeMatrix.fetchSampleSizeMatrix);
router.post(urlForSampleSizeMatrix, sampleSizeMatrix.createAndUpdateSenarios);
router.put(urlForSampleSizeMatrix, sampleSizeMatrix.createAndUpdateSenarios);
router.delete(urlForSampleSizeMatrix, sampleSizeMatrix.deleteSenarios);

router.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
