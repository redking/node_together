var express = require('express');
var app = express();

var exphbs  = require('express-handlebars');

// setting up a view engine and configure it, like a very small package
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layOutsDir: "./app/views/layouts"
	 }));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

// call the motivations
const motivations = require('motivations');

// choose one 
const pickOne = require('pick-one');

app.get("/", function (request, response) {
	response.render('motivation');
});

app.get("/about", function (request, response) {
	response.send("Poop");
});

module.exports = app;