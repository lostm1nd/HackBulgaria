'use strict';

var sum_of_digits = function(n) {
  var absValue = n,
      sumOfDigits = 0;

  if (absValue < 0) {
    absValue = -absValue;
  }


  while (absValue) {
    sumOfDigits += absValue % 10;
    absValue = parseInt(absValue / 10, 10);
  }

  return sumOfDigits;
};


exports.sum = sum_of_digits;
