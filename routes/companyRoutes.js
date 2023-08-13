const express = require('express');
const companyController = require('../controllers/companyController');

const router = express.Router();

router.get('/add-company', companyController.addCompany);
router.get('/manage-company', companyController.companyList);
router.post('/add-company-process', companyController.addCompanyProcess);
router.get('/edit-company/:id', companyController.companyDetails);
router.post('/edit-company-process/:id', companyController.editCompanyProcess);
router.get('/delete-company/:id', companyController.companyDelete);

module.exports = router;