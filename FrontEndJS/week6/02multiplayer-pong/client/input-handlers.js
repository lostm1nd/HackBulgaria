var InputModule = (function() {
  'use strict';

  // up arrow -> 38
  // down arrow -> 40
  function keyDownHandler(ev, socket, hostId, gameId) {
    if (ev.keyCode === 38 && socket.io.engine.id === hostId) {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveUp',
        isHost: true
      });
    } else if (ev.keyCode === 38) {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveUp',
        isHost: false
      });
    } else if (ev.keyCode === 40 && socket.io.engine.id === hostId) {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveDown',
        isHost: true
      });
    } else if (ev.keyCode === 40) {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveDown',
        isHost: false
      });
    }
  }

  function keyUpHandler(socket, hostId, gameId) {
    if (socket.io.engine.id === hostId) {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveStop',
        isHost: true
      });
    } else {
      socket.emit('move', {
        gameId: gameId,
        type: 'paddleMoveStop',
        isHost: false
      });
    }
  }

  function initKeyHandlers(socket, hostId, gameId) {
    window.addEventListener('keydown', function(ev) {
      keyDownHandler(ev, socket, hostId, gameId);
    }, false);

    window.addEventListener('keyup', function() {
      keyUpHandler(socket, hostId, gameId);
    }, false);
  }

  return {
    initKeyHandlers: initKeyHandlers
  };

}());
