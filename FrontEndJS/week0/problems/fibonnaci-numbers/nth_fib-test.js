'use strict';

var fib = require('./nth_fib').fib;

exports.TestFibForOne = function(test) {
  test.equal(1, fib(1));
  test.done();
};

exports.TestFibForTwo = function(test) {
  test.equal(1, fib(2));
  test.done();
};

exports.TestFibForThree = function(test) {
  test.equal(2, fib(3));
  test.done();
};

exports.TestFibForTen = function(test) {
  test.equal(55, fib(10));
  test.done();
};

// nth_fibonacci(1) === 1
// nth_fibonacci(2) === 1
// nth_fibonacci(3) === 2
// nth_fibonacci(10) === 55
