var express = require('express');
var router = express.Router();


var ctrlLocations =require('../controllers/locations')
var ctrlOthers =require('../controllers/other')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
