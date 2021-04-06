const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');
const { createAttendance, editAttendance,getAttendance } = require('../controller/attendance');
const subjectRequest = require('../middlewares/subjectRequest');
const {validateAttendence,isRequestValidated} = require("../middlewares/validators")


router.post('/api/subject/attendance/:id', auth, validateAttendence, isRequestValidated, createAttendance);
router.patch('/api/subject/attendance/:id', auth, editAttendance);
router.get('/api/subject/attendance/:id', auth, subjectRequest, getAttendance);

module.exports = router;