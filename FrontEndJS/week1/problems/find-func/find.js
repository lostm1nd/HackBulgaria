'use strict';

var find = function(predicate, arr) {
  var element;

  arr.forEach(function(x) {
    if (predicate(x)) {
      element = x;
    }
  });

  return element;
};

exports.find = find;

// console.log(find(function(x) {
//   if (x === 'sharo') {
//     return true;
//   }
//   return false;
// }, ['arka', 'pool', 'bow']));
