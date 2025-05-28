const express = require('express');
const router = express.Router();
const controller = require('../controllers/dataController');

router.post('/', controller.handle);

module.exports = router;