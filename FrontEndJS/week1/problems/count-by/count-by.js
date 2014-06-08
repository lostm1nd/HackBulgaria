'use strict';

var countBy = function(countingFunction, arr) {
  var result = {};

  arr.forEach(function(x) {
    var key = countingFunction(x);

    if (result[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  });

  return result;
};

exports.countBy = countBy;
