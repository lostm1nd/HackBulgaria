/* globals require */

require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'handlebars': '../bower_components/handlebars/handlebars',
    'user': '../models/user',
    'loginView': '../views/loginView'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

require(['backbone', 'user', 'jquery', 'loginView'],
  function (Backbone, User, $, LoginView) {
  'use strict';

  var login = new LoginView({
    el: '#game-lobby'
  });

  login.render();
});
