'use strict';

var is_prime = function(n) {
var prime = true;
  if (n<=1) {
    return !prime;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i ===0) {
      return !prime;
    }
  }
  return prime;
};

exports.isPrime =   is_prime;
