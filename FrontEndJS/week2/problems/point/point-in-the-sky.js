'use strict';

function Point(x, y) {

  if (!(this instanceof Point)) {
    return new Point(x, y);
  }

  this.getX = function getX() {
    return x;
  };

  this.getY = function getY() {
    return y;
  };

  this.xInc = function increaseX() {
    x +=1;
  };

  this.xDec = function decreaseX() {
    x -=1;
  };

  this.yInc = function increaseY() {
    y +=1;
  };

  this.yDec = function decreaseX() {
    y -=1;
  };

}

Point.prototype.equals = function equals(otherPoint) {
  return this.getX() === otherPoint.getX() &&
          this.getY() === otherPoint.getY();
};

Point.prototype.toString = function toString() {
  return 'Point @ ' + this.getX() + ', ' + this.getY();
};

exports.Point = Point;
