const express = require('express')
const router = express.Router();

const characterController = require('../controllers/characterController');

router.get('/', characterController.index);
router.get('/:id', characterController.show);

module.exports = router;