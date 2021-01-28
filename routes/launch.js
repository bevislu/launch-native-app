var express = require('express');
var router = express.Router();

/* Launch a native app on mobile device. */
router.get('/', function(req, res, next) {
  res.status(302).location('glip://rclogin').send('Redirect to native app...');
  //res.redirect(302, 'glip://rclogin');
});

module.exports = router;
