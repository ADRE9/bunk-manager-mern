const express = require('express');
const router = new express.Router();
const { createUser, deleteUser, updateUser, loginUser, logout, logoutAll, userData } = require('../controller/user');
//middlewares
const auth = require('../middlewares/auth');


router.post('/api/auth/new/signup',createUser);
router.delete('/api/auth', auth ,deleteUser);
router.patch('/api/auth', auth ,updateUser);
router.post('/api/auth/login',loginUser);
router.post('/api/auth/logout',  auth ,logout);
router.post('/api/auth/logoutAll', auth, logoutAll);
router.get('/api/auth/userData',auth, userData);

module.exports = router;
