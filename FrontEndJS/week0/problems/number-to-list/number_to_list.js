'use strict';

var number_to_list = function(n){
  var numAsString = n + '',
      listOfNumbers = numAsString.split('').map(Number);

  return listOfNumbers;
};

exports.toList = number_to_list;
