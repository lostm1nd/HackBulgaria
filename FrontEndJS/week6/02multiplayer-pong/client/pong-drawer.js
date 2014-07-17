// Handles the drawing of the table
// and the ball. Must be included
// in the game loop.
var PongDrawer = (function() {
  'use strict';

  var instance;

  function Drawer(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  Drawer.prototype.drawTable = function drawTable(leftPaddle, rightPaddle) {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // draw table lines
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = '#fff';
    this.context.moveTo(leftPaddle.width, 0);
    this.context.lineTo(leftPaddle.width, this.canvas.height);

    this.context.moveTo(this.canvas.width - rightPaddle.width, 0);
    this.context.lineTo(this.canvas.width - rightPaddle.width, this.canvas.height);

    this.context.moveTo(this.canvas.width/2, 0);
    this.context.lineTo(this.canvas.width/2, this.canvas.height);
    this.context.stroke();

    // draw paddles
    this.context.beginPath();
    this.context.lineWidth = leftPaddle.width;
    this.context.moveTo(leftPaddle.width/2, leftPaddle.y);
    this.context.lineTo(leftPaddle.width/2, leftPaddle.y + leftPaddle.height);

    this.context.moveTo(this.canvas.width - rightPaddle.width/2, rightPaddle.y);
    this.context.lineTo(this.canvas.width - rightPaddle.width/2, rightPaddle.y + rightPaddle.height);
    this.context.stroke();
  };

  Drawer.prototype.drawBall = function drawBall(ball) {
    this.context.fillStyle = '#fff';
    this.context.beginPath();
    this.context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI, false);
    this.context.fill();
  };

  Drawer.prototype.drawScores = function drawScores(leftScore, rightScore) {
    this.context.fillStyle = '#fff';
    context.font = '30px sans-serif';
    context.fillText('' + leftScore, this.canvas.width / 2 - 40, 40);
    context.fillText('' + rightScore, this.canvas.width / 2 + 40, 40);
  };

  return {
    getInstance: function(canvas) {
      if (!instance) {
        instance = new Drawer(canvas);
      }

      return instance;
    }
  };

}());
