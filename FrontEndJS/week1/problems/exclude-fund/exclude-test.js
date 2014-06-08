'use strict';

var exclude = require('./exclude').exclude;


exports.testWithoutRepetition = function(test) {
  test.deepEqual([1, 2], exclude([4,5,6,7,9,10],[1, 2,4,5,6,7,9,10]));
  test.done();
};

exports.testWithRepetition = function(test) {
  test.deepEqual([1, 2, 1], exclude([4,5,6,7,9,10],[1, 2,4,5,6,1,7,9,10]));
  test.done();
};
