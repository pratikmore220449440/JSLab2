var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
router.get('/NandaMore', function(req, res, next) {
  res.render('mother', { title: 'Mother' });
});
router.get('/PratapMore', function(req, res, next) {
  res.render('father', { title: 'Father' });
});
router.get('/NishitaNeelamMore', function(req, res, next) {
  res.render('sisters', { title: 'Sisters' });
});
module.exports = router;
