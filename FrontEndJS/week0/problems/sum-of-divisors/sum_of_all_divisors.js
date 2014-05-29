'use strict';

var sum_of_divisors = function(n) {
  var sum=0;
  for (var i = 1; i <= n; i++) {
    if (n%i ===0) {
      sum+=i;
    }
  }
  return sum;
};

exports.SAD = sum_of_divisors;

