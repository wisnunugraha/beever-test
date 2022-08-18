const {ApiController} = require('../app/index')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/login', ApiController.authLogin);
router.post('/create', ApiController.authRegister);

module.exports = router;
