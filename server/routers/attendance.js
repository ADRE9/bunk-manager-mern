const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');
const { createAttendance, editAttendance,getAttendance } = require('../controller/attendance');
const subjectRequest = require('../middlewares/subjectRequest');


router.post('/api/subject/attendance/:id', auth, createAttendance);
router.patch('/api/subject/attendance/:id', auth, editAttendance);
router.get('/api/subject/attendance/:id', auth, subjectRequest, getAttendance);

module.exports = router;