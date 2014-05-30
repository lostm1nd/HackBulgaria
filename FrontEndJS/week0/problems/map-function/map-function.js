'use strict';

var map = function(func, array) {
  var len = array.length,
      result = [];

  for (var i = 0; i < len; i++) {
    result.push(func(array[i]));
  }

  return result;
};

var squared = map(function(x) {
  return x * x;
}, [1, 2, 3, 4, 5]);

console.log(squared);
