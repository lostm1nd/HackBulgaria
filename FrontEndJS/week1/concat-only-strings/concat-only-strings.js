'use strict';

function concat(a, b) {
  if (typeof a !== 'string' ||
      typeof b !== 'string') {
    throw new TypeError('Function allows strings only');
  }

  return a + b;
}

exports.concat = concat;
