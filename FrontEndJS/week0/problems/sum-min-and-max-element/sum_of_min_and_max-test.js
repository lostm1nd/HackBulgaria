'use strict';

var sumMinMax = require('./sum_of_min_and_max').sumMinMax;


// sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
// sum_of_min_and_max([-10,5,10,100]) === 90
// sum_of_min_and_max([1]) === 2

exports.TestOne = function(test) {
  test.equal(10, sumMinMax([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.TestTwo = function(test) {
  test.equal(90, sumMinMax([-10,5,10,100]));
  test.done();
};

exports.TestThree = function(test) {
  test.equal(2, sumMinMax([1]));
  test.done();
};
