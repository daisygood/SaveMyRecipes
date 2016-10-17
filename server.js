var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 5000;

mongoose.connect('mongodb://heroku_qc5w98g4:o8mr2al2qkokqvdjadg5dihfmu@ds029486.mlab.com:29486/heroku_qc5w98g4');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes.js')(app);

app.listen(port);

console.log("App listening on port " + port);
