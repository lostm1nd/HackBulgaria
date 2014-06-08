'use strict';

function sum(a, b) {
  if (typeof a !== 'number' ||
      typeof b !== 'number') {
    throw new TypeError('The functions accepts numbers only');
  }

  return a + b;
}

exports.sumNumbers = sum;
