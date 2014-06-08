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

var pluckWithMap = function(property, arr) {
  // takes and array with objects
  // and transforms it into a new array
  // that consist of items which
  // are the value of the given property
  return arr.map(function(obj) {
    return obj[property];
  });
};

exports.pluck = pluckWithMap;
