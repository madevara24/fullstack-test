const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

router.get('/', doctorController.doctor_index);
router.post('/', doctorController.doctor_create_post);
router.get('/:id', doctorController.doctor_details);

module.exports = router;