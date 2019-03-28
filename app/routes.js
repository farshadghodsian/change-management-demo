//-------------------------------------------------------------------
//  REST API routes to perform READ Operations in MYSQL database
//-------------------------------------------------------------------

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('index');
});

router.get('/index.html', function (req, res) {
	res.render('index');
});

router.get('/change.html', function (req, res) {
	res.render('change', {req: req});
});
module.exports = router;