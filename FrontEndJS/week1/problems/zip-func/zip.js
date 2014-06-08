'use strict';

var zip = function() {
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
    arguments[i].forEach(function(item, index) {
      if (result[index] === undefined) {
        result[index] = [];
      }
      result[index].push(item);
    });
  }

  return result;
};

exports.zip = zip;

// console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
