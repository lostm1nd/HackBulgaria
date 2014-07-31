/* global require, console */

require.config({
  paths: {
    'Q': 'bower_components/q/q'
  }
});

require(['Q'], function(Q) {
  'use strict';

  function first() {
    var deferred = Q.defer();

    setTimeout(function() {
      console.log('first');
      deferred.resolve();
    }, 2000);

    return deferred.promise;
  }

  function second() {
    var deferred = Q.defer();

    setTimeout(function() {
      console.log('second');
      deferred.resolve();
    }, 2000);

    return deferred.promise;
  }

  function third() {
    console.log('I should do the job after first and second');
  }

  Q.fcall(first)
    .then(second)
    .then(third)
    .done();

});
