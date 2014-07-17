var PongBall = (function() {
  'use strict';

  function Ball(options) {
    if (!(this instanceof Ball)) {
      return new Ball(options);
    }

    options = options || {};

    this.x = options.x || 0;
    this.y = options.y || 0;
    this.radius = options.radius || 12;
    this.velX = options.velX || 0;
    this.velY = options.velY || 0;
  }

  return {
    Ball: Ball
  };

}());
