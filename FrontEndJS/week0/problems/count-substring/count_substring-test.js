'use strict';

var count = require('./count_substring').count;

// count_substrings("This is a test string", "is") === 2
// count_substrings("babababa", "baba") === 2
// count_substrings("JavaScript is an awesome language to program in!", "o") === 3
// count_substrings("We have nothing in common!", "really?") === 0
// count_substrings("This is this and that is this", "this")  === 2

exports.testStringIs = function(test) {
  test.equal(2, count('This is a test string', 'is'));
  test.done();
};

exports.testStringBABA = function(test) {
  test.equal(2, count('babababa', 'baba'));
  test.done();
};

exports.testStringO = function(test) {
  test.equal(3, count('JavaScript is an awesome language to program in!',
    'o'));
  test.done();
};

exports.testStringREALLY = function(test) {
  test.equal(0, count('We have nothing in common!', 'really?'));
  test.done();
};

exports.testStringTHIS = function(test) {
  test.equal(2, count('This is this and that is this', 'this'));
  test.done();
};
