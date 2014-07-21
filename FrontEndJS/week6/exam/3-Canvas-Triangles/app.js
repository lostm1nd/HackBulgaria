$(function() {
  'use strict';

  var localStorage = window.localStorage,
      drawingsTemplate = Handlebars.compile($('#options-template').html()),
      canvas = document.getElementById('drawing-board'),
      context = canvas.getContext('2d'),
      fillColor = '#000',
      strokeColor = '#000',
      savedDrawings = Object.keys(localStorage),
      restorePoints = [],
      trianglePoints = [],
      initialCanvasState = canvas.toDataURL();

  // App initialization
  if (savedDrawings.length > 0) {
    loadSavedDrawings(savedDrawings);
  }

  // Event handlers
  $('#clear').on('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  $('#undo').on('click', function() {
    loadImageOnCanvas(restorePoints.pop());

    trianglePoints.pop();
  });

  $('#save').on('click', function() {
    var drawingName = prompt('Enter name for this drawing: '),
        dataUrl = null;

    if (drawingName) {
      dataUrl = canvas.toDataURL();
      localStorage.setItem(drawingName, dataUrl);
      loadSavedDrawings(drawingName);
      initialCanvasState = canvas.toDataURL();
    } else {
      alert('Drawing can not be saved without a name.');
    }
  });

  $('#fill-color').on('change', function() {
    fillColor = $(this).val();
  });

  $('#stroke-color').on('change', function() {
    strokeColor = $(this).val();
  });

  $('div.menu').on('change', '#saved-drawings', function() {
    var dataUrl = localStorage.getItem($(this).val());

    if (!isCanvasBlank() && confirm('Do you want to save this drawing first?')) {
      $('#save').trigger('click');
    }

    $('#clear').trigger('click');
    loadImageOnCanvas(dataUrl);
  });

  $(canvas).on('click', function(ev) {
    var coordinates = UtilsModule.getMousePosition(canvas, ev);
    drawPoint(coordinates);
    trianglePoints.push(coordinates);

    if (trianglePoints.length === 3) {
      drawTriangle();
      trianglePoints.length = 0;
    }

    restorePoints.push(canvas.toDataURL());

    if (restorePoints.length > 5) {
      restorePoints.shift();
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

  function loadImageOnCanvas(dataUrl) {
    var imageObj = new Image();
    imageObj.onload = function() {
      context.drawImage(this, 0, 0);
      initialCanvasState = canvas.toDataURL();
    };

    imageObj.src = dataUrl;
  }

  function loadSavedDrawings(drawings) {
    if (!Array.isArray(drawings)) {
      drawings = [drawings];
    }

    $('#saved-drawings').append(drawingsTemplate({
      drawings: drawings
    }));
  }

  function isCanvasBlank() {
    return initialCanvasState === canvas.toDataURL();
  }
});
