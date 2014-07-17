/* globals require, console */

(function() {
  'use strict';

  var app = require('express')(),
      http = require('http').Server(app),
      io = require('socket.io')(http);

  app.get('/', function(request, response) {
    response.sendfile('index.html');
  });

  io.on('connection', function(socket) {
    console.log('new user connected');

    socket.on('disconnect', function() {
      console.log('a user disconnected');
    });

    socket.on('chat message', function(msg) {
      console.log(msg);
      io.emit('chat message', msg);
    });
  });

  http.listen(3000, function() {
    console.log('listening on *:3000');
  });
}());
