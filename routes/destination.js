const express = require('express');
const router = express.Router();
const controller = require('../controllers/destinationController');

router.get('/', controller.getAll);
router.get('/account/:accountId', controller.getByAccount);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;