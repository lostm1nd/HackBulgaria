'use strict';

var contains = function(element, array) {
  return array.some(function(x) {
    return x === element;
  });
};

exports.contains = contains;
