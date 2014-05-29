'use strict';

var is_int_palindrome = function(n) {
  var numAsStr = n + '',
      len = numAsStr.length;

  for (var i = 0; i < len/2; i++) {
    if (numAsStr[i] !== numAsStr[len-1-i]) {
      return false;
    }
  }

  return true;
};

exports.palindrome = is_int_palindrome;
