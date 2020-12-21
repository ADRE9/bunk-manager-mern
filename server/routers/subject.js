const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');
const subjectRequest=require('../middlewares/subjectRequest')

const { createSubject, editSubject, deleteSubject,createTemplates,getSubjectBySemester, getAllSemester,deactivateSubject,
  deactivateAllSubject } = require('../controller/subject');

router.post('/api/subject/new', auth, createSubject);
router.post('/api/subject/createTemplate',auth,createTemplates)
router.get('/api/subject/:semester', auth, getSubjectBySemester);
//router.get('/api.getSubject', auth,getSubject);
router.patch('/api/subject/:id', auth,subjectRequest, editSubject);
router.delete('/api/subject/:id', auth, subjectRequest, deleteSubject);
router.get('/api/semesters', auth, getAllSemester);
router.patch('/api/subject/deactivate/:id', auth, deactivateSubject);
router.patch('/api/semester/deactivate', auth, deactivateAllSubject);

module.exports = router;