'use strict';

var only = function(type, arr) {
  return arr.map(function(x) { return typeof x; })
            .every(function(x) { return x === type; });
};

console.log(only('number', [1,2,3,4]));

console.log(only('string', [1,2,3,4]));
