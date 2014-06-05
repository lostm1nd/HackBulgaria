'use strict';

var find = function(predicate, arr) {
  // filter returns new array
  // with items matching the predicate
  // and we want the first match
  return arr.filter(predicate)[0];
};

exports.findV2 = find;
