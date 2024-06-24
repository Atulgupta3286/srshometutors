var express = require('express');
var router = express.Router();

/* GET index page. */
// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET welcome page. */
router.get('/welcome', function(req, res, next) {
  res.render('welcome');
});

/* GET mission_vision page. */
router.get('/mission_vision', function(req, res, next) {
  res.render('mission_vision');
});

/* GET mission_vision page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/more', function(req, res, next) {
  res.render('more');
});


module.exports = router;
