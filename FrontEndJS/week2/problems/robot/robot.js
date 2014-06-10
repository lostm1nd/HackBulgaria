'use strict';

var Point = require('../point/point-in-the-sky').Point;

function Robot(startPoint) {

  if (!(startPoint instanceof Point)) {
    throw new TypeError('The start point must be instanceof Point.');
  }

  if (!(this instanceof Robot)) {
    return new Robot(startPoint);
  }

  this.getPosition = function getPosition() {
    return startPoint;
  };

  this.moveLeft = function moveLeft(distance) {
    var movedDistance = 0;

    while (movedDistance < distance) {
      startPoint.xDec();
      movedDistance += 1;
    }
  };

  this.moveRight = function moveRight(distance) {
    var movedDistance = 0;

    while (movedDistance < distance) {
      startPoint.xInc();
      movedDistance += 1;
    }

  };

  this.moveUp = function moveUp(distance) {
    var movedDistance = 0;

    while (movedDistance < distance) {
      startPoint.yDec();
      movedDistance += 1;
    }
  };

  this.moveDown = function moveDown(distance) {
    var movedDistance = 0;

    while (movedDistance < distance) {
      startPoint.yInc();
      movedDistance += 1;
    }
  };

}

var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);

console.log(robot.getPosition().toString());
