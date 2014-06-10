"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var pizzas = [{
  "name" : "Pepperoni",
  "costLv" : {"small": 4, "medium": 5.65, "large": 6.5},
  "timeMs" : {"small": 1500, "medium": 2000, "large": 2500}
}, {
  "name" : "Margherita",
  "costLv" : {"small": 3.4, "medium": 4.6, "large": 5.5},
  "timeMs" : {"small": 1000, "medium": 1500, "large": 2000}
}, {
  "name" : "Quatro staggione",
  "costLv" : {"small": 4.3, "medium": 5.9, "large": 7.2},
  "timeMs" : {"small": 2000, "medium": 2500, "large": 3000}
}, {
  "name" : "Diavola",
  "costLv" : {"small": 4.1, "medium": 5.3, "large": 6.4},
  "timeMs" : {"small": 1700, "medium": 2100, "large": 2700}
}, {
  "name" : "Veggie",
  "costLv" : {"small": 3, "medium": 4.2, "large": 5.4},
  "timeMs" : {"small": 1400, "medium": 1900, "large": 2300}
}];

app.get('/students', function(req, res){
  res.json(students);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
