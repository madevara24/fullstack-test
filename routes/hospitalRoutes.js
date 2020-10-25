const express = require('express');
const hospitalController = require('../controllers/hospitalController');

const router = express.Router();

router.get('/', hospitalController.hospital_index);
router.post('/', hospitalController.hospital_create_post);
router.get('/:id', hospitalController.hospital_details);

module.exports = router;