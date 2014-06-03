'use strict';

var sum = require('./sum-only-number').sumNumbers;


exports.testSum10andA = function(test) {
  test.throws(function() {
    sum(10, 'a');
  });
  test.done();
};

exports.testSumAand5 = function(test) {
  test.throws(function() {
    sum('A', 5);
  });
  test.done();
};

exports.testSum10and15 = function(test) {
  test.equals(25, sum(10, 15));
  test.done();
};

exports.testSum55and1905 = function(test) {
  test.equals(1960, sum(55, 1905));
  test.done();
};

exports.testSum2poin5and1point5 = function(test) {
  test.equals(4, sum(2.5, 1.5));
  test.done();
};


