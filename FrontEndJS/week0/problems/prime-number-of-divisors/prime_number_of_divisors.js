'use strict';

var prime_number_of_divisors = function(n) {
  var divisorCount = 0,
      primeCheck = require('./is_prime').isPrime;



  for (var i = 1; i <= n; i+=1) {
    if (n % i === 0) {
      divisorCount+=1;
    }
  }

  var result = primeCheck(divisorCount);

  return result;

};


exports.PR = prime_number_of_divisors;
