const ApiAuth = require('./auth.router');
const ApiQuotes = require('./quotes.router')
const express = require('express');
const router = express.Router();

// /* GET home page. */
router.use('/auth/',
  ApiAuth
);

router.use('/quotes/',
  ApiQuotes
);



module.exports = router;
module.exports = router;
