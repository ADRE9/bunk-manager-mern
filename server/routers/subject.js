const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');

const { createSubject, editSubject, deleteSubject,createTemplates,getSubjectBySemester } = require('../controller/subject');

router.post('/api/subject/new', auth, createSubject);
router.post('/api/subject/createTemplate',auth,createTemplates)
router.get('/api/subject/:semester', auth, getSubjectBySemester);
//router.get('/api.getSubject', auth.getSubject);
router.patch('/api/subject/:id', auth, editSubject);
router.delete('/api/subject/:id', auth, deleteSubject);

module.exports = router;