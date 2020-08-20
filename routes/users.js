var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/test", (req, res, next) => {
	res.json({success: true, message: "TEST 1234"});
})

module.exports = router;
