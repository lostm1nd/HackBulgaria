/* globals define */

define(['backbone', 'jquery'], function (Backbone, $) {
  'use strict';

  var LoginView = Backbone.View.extend({
    render: function () {
      this.$el.load('templates/login.template');
    }
  });

  return LoginView;

});
