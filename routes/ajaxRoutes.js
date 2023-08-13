const express = require('express');
const commonController = require('../controllers/commonController');

const router = express.Router();

router.get('/get-states-by-country/:id', commonController.getStates);
router.get('/get-cities-by-state/:id', commonController.getCities);
router.post('/is-email-exist', commonController.isEmailExist);
router.post('/is-phone-exist', commonController.isPhoneExist);


module.exports = router;