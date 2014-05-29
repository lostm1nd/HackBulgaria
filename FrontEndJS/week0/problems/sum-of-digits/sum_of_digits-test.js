'use strict';

var sum = require('./sum_of_digits').sum;


// sum_of_digits(1325132435356) === 43
// sum_of_digits(123) === 6
// sum_of_digits(6) === 6
// sum_of_digits(-10) === 1

exports.TestForLongNum = function(test) {
  test.equal(43, sum(1325132435356));
  test.done();
};

exports.TestFor123 = function(test) {
  test.equal(6, sum(123));
  test.done();
};

exports.TestFor6 = function(test) {
  test.equal(6, sum(6));
  test.done();
};

exports.TestForMinus10 = function(test) {
  test.equal(1, sum(-10));
  test.done();
};
