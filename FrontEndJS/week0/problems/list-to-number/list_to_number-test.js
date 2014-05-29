'use strict';

var toNumber = require('./list_to_number').toNumber;

// list_to_number([1,2,3]) === 123
// list_to_number([9,9,9,9,9]) === 99999
// list_to_number([1,2,3,0,2,3]) === 123023

exports.testForNumber123 = function(test) {
  test.equal(123, toNumber([1,2,3]));
  test.done();
};

exports.testForNumber99999 = function(test) {
  test.equal(99999, toNumber([9,9,9,9,9]));
  test.done();
};

exports.testForNumber123023 = function(test) {
  test.equal(123023, toNumber([1,2,3,0,2,3]));
  test.done();
};
