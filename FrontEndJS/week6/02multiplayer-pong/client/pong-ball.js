// Singleton since we only ever need
// one ball on the playingfield.
// Also somewhat implementing a memento
// pattern so we can easily restore the
// ball to its original position.
var PongBall = (function() {
  'use strict';

  var BALL_RADIUS = 22,
      instance,
      memento;

  function Ball(options) {
    options = options || {};

    this.x = options.x || 0;
    this.y = options.y || 0;
    this.radius = options.radius || BALL_RADIUS;
    this.velX = options.velX || 0;
    this.velY = options.velY || 0;

    instance = this;
  }

  Ball.prototype.restore = function restore() {
    this.x = memento.x;
    this.y = memento.y;
    this.radius = memento.radius;
    this.velX = memento.velX;
    this.velY = memento.velY;
  };

  function save() {
    memento = {};
    memento.x = instance.x;
    memento.y = instance.y;
    memento.radius = instance.radius;
    memento.velX = instance.velX;
    memento.velY = instance.velY;
  }

  return {
    getInstance: function(options) {
      if (!instance) {
        instance = new Ball(options);
        save();
      }

      return instance;
    }
  };

}());
