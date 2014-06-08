'use strict';

var containsList = require('./contains-list').containsList,
    smallArr = [2, 23, 35, 15, 15],
    middleArr = [0.2, 2555, 10.15, 901, 101, 56, -24],
    largeArr = [99, 99.99, 0.01, -98.23, 12.21, -1.23, 45, 222, 1081];


exports.testSmallArray = function(test) {
  test.equal(true, containsList([35, 15], smallArr));
  test.done();
};

exports.testMiddleArray = function(test) {
  test.equal(true, containsList([10.15, 0.2], middleArr));
  test.done();
};

exports.testLargeArray = function(test) {
  test.equal(true, containsList([0.01, -1.23], largeArr));
  test.done();
};

exports.testLargeArrayForFalse = function(test) {
  test.equal(false, containsList([2, 2.222], largeArr));
  test.done();
};

exports.testMiddleArrayForFalse = function(test) {
  test.equal(false, containsList([0.111, -24], middleArr));
  test.done();
};

exports.testSmallArrayForFalse = function(test) {
  test.equal(false, containsList([99, 111], smallArr));
  test.done();
};
