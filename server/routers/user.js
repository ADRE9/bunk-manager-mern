const express = require('express');
const router = new express.Router();
const { createUser, createCrUser, deleteUser, updateUser, loginUser, logout,logoutAll } = require('../controller/user');
const auth = require('../middlewares/auth');


router.post('/auth/new/signup',createUser);
router.post('/auth/new/cr/signup',createCrUser);
router.delete('/auth/:id', deleteUser);
router.patch('/auth/:id', updateUser);
router.post('/auth/login',loginUser);
router.post('/auth/logout',  auth ,logout);
router.post('/auth/logoutAll',auth, logoutAll);

module.exports = router;
