var PongPaddle = (function() {
  'use strict';

  function Paddle(options) {
    this.width = options.width;
    this.height = options.height;
    this.velocity = options.velocity;
    this.y = options.y;
  }

  return {
    Paddle: Paddle
  };

}());
