'use strict';

var contains = require('./contains').contains,
    smallArr = [2, 23, 35, 15, 15],
    middleArr = [0.2, 2555, 10.15, 901, 101, 56, -24],
    largeArr = [99, 99.99, 0.01, -98.23, 12.21, -1.23, 45, 222, 1081];


exports.testSmallArray = function(test) {
  test.equal(true, contains(35, smallArr));
  test.done();
};

exports.testMiddleArray = function(test) {
  test.equal(true, contains(10.15, middleArr));
  test.done();
};

exports.testLargeArray = function(test) {
  test.equal(true, contains(0.01, largeArr));
  test.done();
};

exports.testLargeArrayForFalse = function(test) {
  test.equal(false, contains(2.222, largeArr));
  test.done();
};

exports.testMiddleArrayForFalse = function(test) {
  test.equal(false, contains(0.111, middleArr));
  test.done();
};

exports.testSmallArrayForFalse = function(test) {
  test.equal(false, contains(111, smallArr));
  test.done();
};
