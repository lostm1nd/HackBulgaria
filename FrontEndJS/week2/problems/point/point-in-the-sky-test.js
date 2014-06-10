'use strict';

var Point = require('./point-in-the-sky').Point;

var point1 = new Point(3, 5),
    point2 = new Point(3, 5),
    point3 = new Point(5, 3);

exports.testForEquality = function(test) {
  test.equal(true, point1.equals(point2));
  test.done();
};

exports.testForNoEquality = function(test) {
  test.equal(false, point3.equals(point1));
  test.done();
};

exports.testForEqualityAfterManipulation = function(test) {
  point1.xInc();
  point1.xInc();
  point1.yDec();
  point1.yDec();

  test.equal(true, point3.equals(point1));
  test.done();
};
