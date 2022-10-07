const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userCtrl');

//User Signup API
router.post('/signup', UserCtrl.signUp);

//User Login API
router.post('/login', UserCtrl.login);

module.exports = router;