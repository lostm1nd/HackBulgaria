var UtilsModule = (function() {
  'use strict';

  function getMousePosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  return {
    getMousePosition: getMousePosition
  };

}());
