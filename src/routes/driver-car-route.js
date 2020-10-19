const express = require('express')
const router = express.Router()
const controller = require('../controllers/driver-car-controller')

router.post('/', controller.post);
router.get('/', controller.get);
router.patch('/:id', controller.patch);

module.exports = router
