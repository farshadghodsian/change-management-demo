var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var cors = require('cors');

app.locals.siteTitle = 'Change Request Demo REST API'

//set public folder accessable to all without defining routes. Used to host frontend files
app.use(express.static('app/public'));

//Require sqlapi.js file for REST API routes to perform READ Operations in MYSQL database
app.use(require('./sqlapi')); 
app.use(require('./routes')); 

//Accept API calls from other URLS -> used for DEV will disable in Production
// app.use(cors());
// app.options('*', cors());

app.set('view engine', 'ejs');
app.set('views', 'app/views');

//Run NodeJS service listening on port 54003 using HTTPS
var server = require('http')
    .createServer(
        //{
        // key: fs.readFileSync('./app/cert/key.pem'),
        // cert: fs.readFileSync('./app/cert/cert.pem')},
        app
    );


server.listen(8080, function() {
  console.log('REST API Listening on port 8080');
});


module.exports = app;
