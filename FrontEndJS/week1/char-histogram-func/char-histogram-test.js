'use strict';

var charHistogram = require('./char-histogram').charHist;

var testingSentence = "!!Count    ;the characters" +
" in ,.,. this ??? very !!!! profound          sentence    !";

var expectedResult = { c: 4,
                        o: 3,
                        u: 2,
                        n: 5,
                        t: 5,
                        h: 3,
                        e: 6,
                        a: 2,
                        r: 4,
                        s: 3,
                        i: 2,
                        v: 1,
                        y: 1,
                        p: 1,
                        f: 1,
                        d: 1 };

exports.testStringWithPunctuationErrors = function(test) {
  test.deepEqual(expectedResult, charHistogram(testingSentence));
  test.done();
};
