'use strict';

var range = function(from, to) {

  function generate(arr, next) {
    if (next > to) {
      return arr;
    }

    return generate(arr.concat(next), next+1);
  }

  return generate([], from);
};

// console.log(range(1, 10));
exports.range = range;
