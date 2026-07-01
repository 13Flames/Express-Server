// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var topSpotsData = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));
app.use(express.json());
app.get('/', function(req, res) {
  var spots = topSpotsData.map(function(spot) {
    return '<li><h2>' + spot.name + '</h2><p>' + spot.description + '</p></li>';
  }).join('');
  res.status(200).send('<h1>Top Spots</h1><ul>' + spots + '</ul>');
});
app.get('/data', function(req, res) {
  res.status(200).json(topSpotsData);
});

// finally export the express application
module.exports = app;
