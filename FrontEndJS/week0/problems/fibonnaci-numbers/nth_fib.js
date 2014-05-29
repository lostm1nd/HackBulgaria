'use strict';

var nth_fibonacci = function(n) {
  var first = 1,
      second = 1,
      next;

    if (n === 1) {
      return first;
    } else if (n === 2) {
      return second;
    } else {

      for (var i = 3; i <= n; i++) {
        next = first + second;

        first = second;
        second = next;
      }

      return next;
    }
};


exports.fib = nth_fibonacci;
