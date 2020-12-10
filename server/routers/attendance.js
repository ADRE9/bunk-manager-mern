const express = require('express');
const auth = require('../middlewares/auth');
const router = new express.Router();

const { createBunk, createAttendance, createGap, editAttendance } = require('../controller/attendance');

router.post('/api/subject/attendance/new', auth, createAttendance);
router.post('/api/subject/attendance/bunk', auth, createBunk);
router.patch('/api/subject/attendance/:id', auth, editAttendance);
router.post('/api/subject/attendance/gap', auth, createGap);

module.exports = router;