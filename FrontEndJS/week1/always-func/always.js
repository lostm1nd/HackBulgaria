'use strict';

var always = function(value) {
  return function() {
    return value;
  };
};

exports.always = always;

var f = always(5);

console.log(f(5));
