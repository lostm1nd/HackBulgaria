'use strict';

var PR = require('./prime_number_of_divisors').PR;

// prime_number_of_divisors(7) === true
// prime_number_of_divisors(8) === false
// prime_number_of_divisors(9) === true

exports.testDivisorsForNumber7 = function(test) {
  test.equal(true, PR(7));
  test.done();
};

exports.testDivisorsForNumber8 = function(test) {
  test.equal(false, PR(8));
  test.done();
};

exports.testDivisorsForNumber9 = function(test) {
  test.equal(true, PR(9));
  test.done();
};
