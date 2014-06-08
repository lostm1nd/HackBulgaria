'use strict';

var wordHistogram = require('./word-histogram').wordHist,
    expectedResult = {
    "a" : 3,
    "function" : 3,
    "is" : 1,
    "with" : 1,
    "very" : 1,
    "functional" : 1
};

exports.testForSimilarWords = function(test) {
  test.deepEqual(expectedResult,
    wordHistogram("A function is a function" +
                  " with a very functional function!"));
  test.done();
};
