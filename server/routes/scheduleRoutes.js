const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

router.get('/', scheduleController.schedule_index);
router.post('/', scheduleController.schedule_create_post);
router.get('/:id', scheduleController.schedule_details);

module.exports = router;