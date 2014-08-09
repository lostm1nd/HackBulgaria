/* globals define */

define(['backbone'], function(Backbone) {
  'use strict';

  var User = Backbone.Model.extend({
    defaults: {
      name: ''
    }
  });

  return User;

});
