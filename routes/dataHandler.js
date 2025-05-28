const express = require('express');
const router = express.Router();
const dataCtrl = require('../controllers/dataController');

router.post('/incoming_data', dataCtrl.handleIncomingData);
router.get('/incoming_data', dataCtrl.handleIncomingData);

module.exports = router;