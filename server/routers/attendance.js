const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');
const { createAttendance, editAttendance } = require('../controller/attendance');


router.post('/api/subject/attendance/:id', auth, createAttendance);
router.patch('/api/subject/attendance/:id', auth, editAttendance);

module.exports = router;