'use strict';

function Pair(left, right) {
  this.left = left;
  this.right = right;
}

Pair.prototype.equals = function equals(otherPair) {
  if (!(otherPair instanceof Pair)) {
    throw new TypeError('Argument shoud be instanceof of Pair.');
  }

  return this.left === otherPair.left &&
          this.right === otherPair.right;
};

Pair.prototype.toString = function toString() {
  return '( {' + this.left + '}, {' + this.right + '} )';
};

Pair.prototype.toList = function toList() {
  return [this.left, this.right];
};

Pair.prototype.combine = function combine(func) {
  return func(this.left, this.right);
};
