'use strict';

var list_to_number = function(digits){
  var result = '';

  digits.forEach(function(x){
    result += x;
  });

  return parseInt(result, 10);
};

exports.toNumber = list_to_number;
