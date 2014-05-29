'use strict';

var SAD = require('./sum_of_all_divisors').SAD;

exports.Test8 = function(test) {
  test.equal(15, SAD(8));
  test.done();
};

exports.Test1 = function(test) {
  test.equal(1, SAD(1));
  test.done();
};

exports.Test7 = function(test) {
  test.equal(8, SAD(7));
  test.done();
};

exports.Test1000 = function(test) {
  test.equal(2340, SAD(1000));
  test.done();
};
// sum_of_divisors(8) === 15
// sum_of_divisors(7) === 8
// sum_of_divisors(1) === 1
// sum_of_divisors(1000) === 2340
