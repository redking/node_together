var express = require('express');
var app = express();

app.get("/", function (request, response) {
	response.send("Hey I like your shoes!");
});

app.get("/about", function (request, response) {
	response.send("C'est ma page");
});

module.exports = app;