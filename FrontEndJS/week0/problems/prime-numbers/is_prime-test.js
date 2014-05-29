'use strict';

var isPrime = require ('./is_prime').isPrime;

// is_prime(1) === false
// is_prime(2) === true
// is_prime(8) === false
// is_prime(11) === true
// is_prime(-10) === false

exports.test1 = function(test) {
  test.equal(false, isPrime(1));
  test.done();
};

exports.test2 = function(test) {
  test.equal(true, isPrime(2));
  test.done();
};

exports.test8 = function(test) {
  test.equal(false, isPrime(8));
  test.done();
};

exports.test11 = function(test) {
  test.equal(true, isPrime(11));
  test.done();
};

exports.testMinus10 = function(test) {
  test.equal(false, isPrime(-10));
  test.done();
};
