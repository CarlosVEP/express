var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index12', { title: 'Express', nombres:["pancho","ferdinand","pedro","lucho"] });
});

module.exports = router;
