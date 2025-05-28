const express = require('express');
const router = express.Router();
const destCtrl = require('../controllers/destinationController');

router.post('/', destCtrl.createDestination);
router.get('/', destCtrl.getAllDestinations);
router.get('/:id', destCtrl.getDestinationById);
router.put('/:id', destCtrl.updateDestination);
router.delete('/:id', destCtrl.deleteDestination);
router.get('/account/:id', destCtrl.getDestinationsByAccount);

module.exports = router;