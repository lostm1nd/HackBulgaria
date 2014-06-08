'use strict';

var range = require('./range').range;

var expected1to5 = [1,2,3,4,5],
    expected5to15 = [5, 6,7,8,9,10,11,12,13,14,15],
    expected2to2 = [2];

exports.testOneToFive = function(test) {
  test.deepEqual(expected1to5, range(1,5));
  test.done();
};

exports.testFiveToFifteen = function(test) {
  test.deepEqual(expected5to15, range(5,15));
  test.done();
};

exports.testTwoToTwo = function(test) {
  test.deepEqual(expected2to2, range(2,2));
  test.done();
};
