'use strict';

var contains = require('../contains-func/contains').contains;

var containsList = function(elements, arr) {
  return elements.every(function(x) {
    return contains(x, arr);
  });
};

exports.containsList = containsList;


// console.log(containsList([1,2], [1,3, 4,2]));
