const express = require('express');
const router = new express.Router();
const { createUser, createCrUser, deleteUser, updateUser, loginUser, logout,logoutAll } = require('../controller/user');
const auth = require('../middlewares/auth');


router.post('/user/new/signup',createUser);
router.post('/user/new/cr/signup',createCrUser);
router.delete('/user/:id', deleteUser);
router.patch('/user/:id', updateUser);
router.post('/user/login',loginUser);
router.post('/user/logout',  auth ,logout);
router.post('/user/logoutAll',auth, logoutAll);

module.exports = router;
