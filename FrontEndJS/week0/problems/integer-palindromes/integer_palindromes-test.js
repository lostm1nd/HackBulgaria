'use strict';

var palin = require('./integer_palindromes').palindrome;

// is_int_palindrome(1) === true
// is_int_palindrome(42) === false
// is_int_palindrome(100001) === true
// is_int_palindrome(999) === true
// is_int_palindrome(123) === false

exports.testPalindrome1 = function(test) {
  test.equal(true, palin(1));
  test.done();
};

exports.testPalindrome42 = function(test) {
  test.equal(false, palin(42));
  test.done();
};

exports.testPalindrome100001 = function(test) {
  test.equal(true, palin(100001));
  test.done();
};

exports.testPalindrome999 = function(test) {
  test.equal(true, palin(999));
  test.done();
};

exports.testPalindrome123 = function(test) {
  test.equal(false, palin(123));
  test.done();
};
