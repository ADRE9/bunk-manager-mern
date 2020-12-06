const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth');

const { createSubject, editSubject, deleteSubject } = require('../controller/subject');

router.post('/api/new/subject', auth, createSubject);
//router.get('/api/getAllSubjects', auth, getAllSubjects);
//router.get('/api.getSubject', auth.getSubject);
router.patch('/api/updateSubject/:id', auth, editSubject);
router.delete('/api/deleteSubject/:id', auth, deleteSubject);

module.exports = router;