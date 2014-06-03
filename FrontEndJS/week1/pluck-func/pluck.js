'use strict';

var pluck = function(property, arr) {
  var result = [];

  arr.forEach(function(obj) {
    if (obj[property]) {
      result.push(obj[property]);
    }
  });

  return result;
};

exports.pluck = pluck;

