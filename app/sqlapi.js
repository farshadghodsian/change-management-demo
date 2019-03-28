//-------------------------------------------------------------------
//  REST API routes to perform READ Operations in MYSQL database
//-------------------------------------------------------------------

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cfg  = require("./knex-cfg").mysql; //specifying knex config file to use mysql client
var knex = require("knex")(cfg);


//this route will return all results for changerequest table
router.get('/getchangedata', function(req, res) {
	knex('changerequests')
			.select('changerequests.ChangeID', 'changerequests.Requestor','changerequests.Classification','changerequests.Client','changerequests.Location','changerequests.Team','changerequests.Date','changerequests.Service','changerequests.Environment','changerequests.Status','changerequests.Description','changerequests.Implementor').asCallback(function(err, rows)
  {
  	if(err) { res.send(err); }
	else
	{
		res.send(rows);	
	}
  });
});

//this request will return data for a single change request based on ID
router.get('/getchangebyid', function(req, res) {
  knex('changerequests')
		.select('changerequests.ChangeID', 'changerequests.Requestor','changerequests.Classification','changerequests.Client','changerequests.Location','changerequests.Team','changerequests.Date','changerequests.Service','changerequests.Environment','changerequests.Status','changerequests.Description','changerequests.Implementor')
		.where('ChangeID', '=', req.query.id).asCallback(function(err, rows)
  {
  	if(err) { res.send(err); }
	else
	{
		res.send(rows);	
	}
  });
});

//this request will return data for a single change request based on ID
router.get('/savechangerequest', function(req, res) {
  knex('changerequests').where('ChangeID', '=', req.query.id)
		.update({'Team': req.query.assignedTeam, Status: 'Assigned to Team'}).asCallback(function(err, rows)
  {
  	if(err) { res.send(err); }
	else
	{
		res.redirect('/index.html');	
	}
  });
});

//this request will return data for a single change request based on ID
router.get('/resetdemo', function(req, res) {
  knex('changerequests').where('Status', '=', 'Assigned to Team')
		.update({"Team" : "", "Status" : 'Initiated - waiting for assignment'}).asCallback(function(err)
  {
  	if(err) { res.send(err); }
	else
	{
		res.redirect('/index.html');	
	}
  });
});
module.exports = router;