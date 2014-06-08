'use strict';

var find = require('./find-v2').findV2;

exports.testForEvenNumbers = function(test) {
  test.equal(2, find(function(x) {
    if (x % 2 === 0) {
      return true;
    }
    return false;
  }, [1,2,3,4,5,6]));
  test.done();
};

exports.testForOddNumbers = function(test) {
  test.equal(1, find(function(x) {
    if (x % 2 === 1) {
      return true;
    }
    return false;
  }, [1,2,3,4,5,6]));
  test.done();
};
