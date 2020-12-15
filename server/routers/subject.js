const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');
const subjectRequest=require('../middlewares/subjectRequest')

const { createSubject, editSubject, deleteSubject,createTemplates,getSubjectBySemester, getAllSemester } = require('../controller/subject');

router.post('/api/subject/new', auth, createSubject);
router.post('/api/subject/createTemplate',auth,createTemplates)
router.get('/api/subject/:semester', auth, getSubjectBySemester);
//router.get('/api.getSubject', auth,getSubject);
router.patch('/api/subject/:id', auth,subjectRequest, editSubject);
router.delete('/api/subject/:id', auth, subjectRequest, deleteSubject);
router.get('/api/semesters', auth, getAllSemester);

module.exports = router;