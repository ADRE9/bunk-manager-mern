const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');



router.post('/api/new/semester', auth, addSemester);
router.patch('/api/updateSemester', auth, updateSemester);
router.delete('/api/deleteSemester', auth, deleteSemester);