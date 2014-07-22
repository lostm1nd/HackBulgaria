(function() {
  'use strict';

  // Game variables
  var canvas = document.getElementById('table'),
      canvasCtx = canvas.getContext('2d'),
      renderer = PongDrawer.getInstance(canvas),
      ball = PongBall.getInstance({
        x: canvas.width / 2,
        y: canvas.height / 2,
      }),
      hostPaddle = new PongPaddle({
        y: canvas.height / 2
      }),
      otherPaddle = new PongPaddle({
        y: canvas.height / 2
      }),
      paddles = [hostPaddle, otherPaddle],
      hostScore = 0,
      otherPlayerScore = 0;

  // Socket set up
  var socket = new io('http://localhost:3000'),
      socketId = null,
      gameId = null,
      hostId = null;

  socket.on('connect', function() {
    socketId = socket.io.engine.id;
    promptUser();
  });

  socket.on('start', function(data) {
    hostId = data.host;
    InputModule.initKeyHandlers(socket, hostId, gameId);


    if (socketId === hostId) {
      newGame();
      gameLoop();
    }

  });

  socket.on('render', onRenderHandler);

  function gameLoop() {
    // The host emits the game info
    // so the partner can update itself
    socket.emit('move', {
      gameId: gameId,
      type: 'gameInfo',
      ball: JSON.stringify(ball),
      hostScore: hostScore,
      partnerScore: otherPlayerScore,
      hostPaddle: JSON.stringify(hostPaddle),
      partnerPaddle: JSON.stringify(otherPaddle)
    });

    renderer.drawTable(hostPaddle, otherPaddle);
    renderer.drawScores(hostScore, otherPlayerScore);
    renderer.drawBall(ball);

    // Update ball position
    ball.x += ball.velX;
    ball.y += ball.velY;

    // Both player update their paddles.
    paddles.forEach(function(paddle) {
      if (paddle.y + paddle.velocity >= 0 &&
          paddle.y + paddle.height + paddle.velocity <= canvas.height) {

        paddle.y += paddle.velocity;
      }
    });

    // If the ball is flying out from the top or
    // bottom of the field inverse its vertical velocity.
    if (ball.y + ball.radius >= canvas.height ||
        ball.y <= ball.radius) {

      ball.velY = -ball.velY;
    }

    // Check if a paddle is hitting the ball
    // If not and the ball goes out of one side
    // of the field, the player on the opposite side
    // scores
    if (ball.x + ball.radius >= canvas.width - otherPaddle.width) {
      if (ball.y >= otherPaddle.y &&
          ball.y <= otherPaddle.y + otherPaddle.height) {
        ball.velX = -ball.velX;
      } else {
        hostScore += 1;
        newGame();
      }
    } else if (ball.x <= ball.radius + hostPaddle.width) {
      if (ball.y >= hostPaddle.y &&
          ball.y <= hostPaddle.y + hostPaddle.height) {
        ball.velX = -ball.velX;
      } else {
        otherPlayerScore += 1;
        newGame();
      }
    }

    requestAnimationFrame(gameLoop);
  }

  function newGame() {
    ball.restore();

    // socket.emit('move', {
    //   gameId: gameId,
    //   type: 'ball',
    //   x: ball.x,
    //   y: ball.y
    // });

    var rnd = getRandomInt(1, 10);

    if (rnd < 5) {
      ball.velX = getRandomInt(-5, -3);
      ball.velY = getRandomInt(-5, -1);
    } else {
      ball.velX = getRandomInt(3, 5);
      ball.velY = getRandomInt(1, 5);
    }
  }

  function onRenderHandler(data) {
    if (socketId !== hostId && data.type === 'gameInfo') {
      renderer.drawTable(JSON.parse(data.hostPaddle), JSON.parse(data.partnerPaddle));
      renderer.drawScores(data.hostScore, data.partnerScore);
      renderer.drawBall(JSON.parse(data.ball));
    }

    // WELCOME TO THE UGLINESS
    if (socketId === hostId) {
      if (data.type === 'paddleMoveUp') {
        if (data.isHost) {
          hostPaddle.velocity = -5;
        } else {
          otherPaddle.velocity = -5;
        }
      }

      if (data.type === 'paddleMoveDown') {
        if (data.isHost) {
          hostPaddle.velocity = 5;
        } else {
          otherPaddle.velocity = 5;
        }
      }

      if (data.type === 'paddleMoveStop') {
        if (data.isHost) {
          hostPaddle.velocity = 0;
        } else {
          otherPaddle.velocity = 0;
        }
      }
    }
  }

  function promptUser() {
    var userName = prompt('Enter username'),
        userInput = prompt('Start or Join a game?').toLowerCase();

    if (userInput === 'start') {

      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/createGame',
        contentType: 'application/json',
        data: JSON.stringify({
        playerName: userName,
        socketId: socketId
        })
      }).done(function(data) {
        gameId = data.gameId;
        console.log(data);
      });

    }

    if (userInput === 'join') {
      gameId = prompt('Enter game id to join');

      $.ajax({
        url: 'http://localhost:3000/joinGame',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
        playerName: userName,
        socketId: socketId,
        gameId: gameId
        })
      }).done(function(result) {
        console.log(result);
      });
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}());
