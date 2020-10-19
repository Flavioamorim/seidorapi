const express = require('express')
const router = express.Router()
const controller = require('../controllers/driver-controller')

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:deleteId', controller.delete);
router.put('/:id', controller.put);
router.get('/:id', controller.getById);

module.exports = router
