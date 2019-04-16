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
			host    : process.env.mysql-host,
			user    : process.env.mysql-user,
			database: process.env.mysql-db,
			password: process.env.msql-pass,
		},
		debug: false
	}
};