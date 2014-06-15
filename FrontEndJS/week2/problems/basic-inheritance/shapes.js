'use strict';

function Shape(type) {

  this.getType = function() {
    return type;
  };

}

Shape.prototype.area = function() {
  throw new Error('Cannot call area of Shape. Use subclasses!');
};

// Implementing rectangle
function Rectangle(width, height) {

  Shape.call(this, 'rectangle');

  this.getWidth = function() {
    return width;
  };

  this.getHeight = function() {
    return height;
  };

}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.getWidth() * this.getHeight();
};

// Implementing triangle
function Triangle(a, b, c) {
  Shape.call(this, 'triangle');

  this.getSideA = function() {
    return a;
  };

  this.getSideB = function() {
    return b;
  };

  this.getSideC = function() {
    return c;
  };

}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function() {
  var halfP = (this.getSideA() + this.getSideB() + this.getSideC()) / 2,
      area = Math.sqrt(halfP * (halfP - this.getSideA()) *
        (halfP - this.getSideB()) * (halfP - this.getSideC()));

      return area;
};

// Implementing circle
function Circle(radius) {
  Shape.call(this, 'circle');

  this.getRadius = function() {
    return radius;
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
  return Math.PI * (this.getRadius() * this.getRadius());
};
