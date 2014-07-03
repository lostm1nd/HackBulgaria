/* global $, _, Handlebars, alert */

$(document).ready(function() {
  'use strict';

  var concatenatedSecrets = '',
      CORRECT_STATUS = 'CORRECT',
      selectBtnByIndexTemplate = 'button[data-index="<%= index %>"]';

  function initButtons(callbackFunc) {
    $.ajax({
      url: 'http://localhost:3000/init',
      type: 'GET'
    }).done(callbackFunc);
  }

  function layoutCircle($elements) {
    var increase = Math.PI * 2 / $elements.length,
        x = 0,
        y = 0,
        angle = 0;

    $.each($elements, function(index, val) {
          x = 300 * Math.cos(angle) + 300;
          y = 300 * Math.sin(angle) + 300;
          $(val).css({
            position: 'absolute',
            left: x + 'px',
            top: y + 'px'
          });
          $(val).attr('data-angle', angle);
          angle += increase;
    });

    rotateCircle($elements);
  }

  function rotateCircle($elements) {
    $elements.each(function() {
      var angle = parseFloat($(this).attr('data-angle')),
          newAngle = angle + 0.01,
          newX = 300 * Math.cos(newAngle) + 300,
          newY = 300 * Math.sin(newAngle) + 300;

      $(this).attr('data-angle', newAngle);
      $(this).css({
        left: newX + 'px',
        top: newY + 'px'
      });
    });

    setTimeout(function() {
      rotateCircle($elements);
    }, 60);
  }

  function enableButton(index) {
    var selector = _.template(selectBtnByIndexTemplate, {index: index});

    $(selector).removeAttr('disabled');
  }

  function disableButton(index) {
    var selector = _.template(selectBtnByIndexTemplate, {index: index});

    $(selector).attr('disabled', true);
  }

  initButtons(function(result) {
    var buttonsHtml = Handlebars.compile($('#buttons-template').html())({
      buttons: _.shuffle(result)
    });

    $('#buttons-container').append(buttonsHtml);
    layoutCircle($('.secret-button'));

    enableButton(0);
  });

  $('#buttons-container').on('click', 'button', function() {
    var index = parseInt($(this).attr('data-index'), 10),
        token = $(this).attr('data-token');

    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/secret/' + token,
      dataType: 'json',
      success: function(response) {
        concatenatedSecrets += response.secret;
        disableButton(index);
        enableButton(index + 1);
      },
      error: function() {
        alert('Server not responding. Try later.');
      }
    });
  });

  $('.unlock').on('click', function() {
    $.ajax({
      url: 'http://localhost:3000/unlock',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        finalSecret: concatenatedSecrets
      })
    }).done(function(data) {
      if(data.status === CORRECT_STATUS) {
        alert('YOU HAVE UNLOCKED THE SECRETS OF THE WORLD!');
        return;
      }

      alert('The secret you have sent is not the final one!');
    });
  });

});
