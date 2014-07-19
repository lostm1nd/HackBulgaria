$(function() {
  'use strict';

  var localStorage = window.localStorage,
      drawingsTemplate = Handlebars.compile($('#options-template').html()),
      canvas = document.getElementById('drawing-board'),
      context = canvas.getContext('2d'),
      fillColor = '#000',
      strokeColor = '#000',
      trianglePoints = [],
      savedDrawings = Object.keys(localStorage);

  // App initialization
  if (savedDrawings.length > 0) {
    $('div.menu').append(drawingsTemplate({
      drawings: savedDrawings
    }));
  }

  // Event handlers
  $('#clear').on('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  $('#undo').on('click', function() {
    context.restore();
  });

  $('#save').on('click', function() {
    var drawingName = prompt('Enter name for this drawing: '),
        dataUrl = null;

    if (drawingName) {
      dataUrl = canvas.toDataURL();
      localStorage.setItem(drawingName, dataUrl);
    } else {
      alert('Drawing is not saved.');
    }
  });

  $('#fill-color').on('change', function() {
    fillColor = $(this).val();
  });

  $('#stroke-color').on('change', function() {
    strokeColor = $(this).val();
  });

  $('div.menu').on('change', '#saved-drawings', function() {
    var imageObj = new Image();
    imageObj.onload = function() {
      context.drawImage(this, 0, 0);
    };

    imageObj.src = localStorage.getItem($(this).val());
  });

  $(canvas).on('click', function(ev) {
    var coordinates = UtilsModule.getMousePosition(canvas, ev);
    drawPoint(coordinates);
    trianglePoints.push(coordinates);

    if (trianglePoints.length === 3) {
      drawTriangle();
      trianglePoints.length = 0;
    }
  });

  // App logic
  function drawPoint(point) {
    context.beginPath();
    context.fillStyle = fillColor;
    context.strokeStyle = strokeColor;
    context.arc(point.x, point.y, 1, 0, Math.PI*2, false);
    context.fill();
    context.stroke();
  }

  function drawTriangle() {
    context.beginPath();
    context.fillStyle = fillColor;
    context.strokeStyle = strokeColor;
    context.moveTo(trianglePoints[0].x, trianglePoints[0].y);
    context.lineTo(trianglePoints[1].x, trianglePoints[1].y);
    context.lineTo(trianglePoints[2].x, trianglePoints[2].y);
    context.closePath();
    context.fill();
    context.stroke();
  }
});
