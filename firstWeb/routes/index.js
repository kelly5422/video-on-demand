var express = require('express');
var router = express.Router();
var name = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'LEECH' });
  console.log(req.query.name);
  res.send('hello world!');
});

/*
router.get('/videos', function(req, res, next) {
  res.send('hello videos!');
});
*/


module.exports = router;
