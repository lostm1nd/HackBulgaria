var PongPaddle = (function() {
  'use strict';

  var PADDLE_HEIGHT = 100,
      PADDLE_WIDTH = 10;

  function Paddle(options) {
    if (!(this instanceof Paddle)) {
      return new Paddle(options);
    }

    this.width = options.width || PADDLE_WIDTH;
    this.height = options.height || PADDLE_HEIGHT;
    this.velocity = options.velocity || 0;
    this.y = options.y || 0;
  }

  return Paddle;

}());
