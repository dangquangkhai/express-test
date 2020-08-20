var express = require('express');
var router = express.Router();
var process = require('process');
/* GET home page. */
router.get('/', function(req, res, next) {
  //process.exit(0);
  res.render('index', { title: 'Express' });
});

module.exports = router;
