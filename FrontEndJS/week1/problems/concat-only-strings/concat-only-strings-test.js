'use strict';

var concat = require('./concat-only-strings').concat;


exports.testStringAndNumber = function(test) {
  test.throws(function() {
    concat('are', 5);
  });
  test.done();
};

exports.testNumberAndString = function(test) {
  test.throws(function() {
    concat(5, 'are');
  });
  test.done();
};

exports.testStringAndString = function(test) {
  test.equal('areYou', concat('are', 'You'));
  test.done();
};
