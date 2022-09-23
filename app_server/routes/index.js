var express = require('express');
var router = express.Router();


var ctrlLocations =require('../controllers/locations')
var ctrlOthers =require('../controllers/others')

/* GET home page. */
router.get('/', ctrlOthers.index);

module.exports = router;

