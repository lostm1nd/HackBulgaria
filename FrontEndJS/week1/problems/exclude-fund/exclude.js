'use strict';

var contains = require('../contains-func/contains').contains;

var without = function(exclude, arr) {
  var result = [];

  arr.forEach(function(x) {
    if (!contains(x, exclude)) {
      result.push(x);
    }
  });

  return result;
};

exports.exclude = without;

console.log(without([1,2,3], [1,2,3,3,4,5,1,7,8]));
