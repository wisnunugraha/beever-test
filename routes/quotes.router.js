const {ApiController} = require('../app/index')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', ApiController.listQuote);
router.post('/create', ApiController.createQuotes);
router.post('/update', ApiController.updateQuotes);
router.post('/delete', ApiController.deleteQuotes);
module.exports = router;
