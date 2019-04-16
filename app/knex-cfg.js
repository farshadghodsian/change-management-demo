//-------------------------------------------------------------------
//  Config file for KNEX.JS connection including database credentials
//-------------------------------------------------------------------
//var secret = require('../secret');

module.exports = 
{
	mysql:
	{
		client: "mysql",
		connection: 
		{
			host    : process.env.mysqlhost,
			user    : process.env.mysqluser,
			database: process.env.mysqldb,
			password: process.env.msqlpass,
		},
		debug: false
	}
};