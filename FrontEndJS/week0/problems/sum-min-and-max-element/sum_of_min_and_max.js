'use strict';

var sum_of_min_and_max = function(arr) {
    var min = arr[0],
        max = arr[0];

    arr.forEach(function(x) {
      if (x < min) {
        min = x;
      }
    });

    arr.forEach(function(x) {
      if (x > max) {
        max = x;
      }
    });

    return min + max;
};

exports.sumMinMax = sum_of_min_and_max;
