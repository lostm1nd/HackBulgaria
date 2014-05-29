'use strict';

var vowels = require('./count_vowels').vowels;

// count_vowels("JavaScript") === 3
// count_vowels("Theistareykjarbunga") === 8
// count_vowels("grrrrgh!") === 0
// count_vowels("Github is the second best thing that happend to programmers,
//               after the keyboard!") === 22
// count_vowels("A nice day to code!") === 8

exports.testOnJavaScript = function(test) {
  test.equal(3, vowels('JavaScript'));
  test.done();
};

exports.testOnTheistarey = function(test) {
  test.equal(8, vowels('Theistareykjarbunga'));
  test.done();
};

exports.testOnGRRRRGH = function(test) {
  test.equal(0, vowels('grrrrgh!'));
  test.done();
};

exports.testOnGit = function(test) {
  test.equal(22, vowels('Github is the second best thing that happend to programmers,' +
                        ' after the keyboard!'));
  test.done();
};

exports.testOnNiceDayToCode = function(test) {
  test.equal(8, vowels('A nice day to code!'));
  test.done();
};
