$(function() {
  'use strict';

  var nameTemplate = Handlebars.compile($('#name-template').html()),
      $namesContainer = $('#names');

  $namesContainer.on('input', 'input', function() {
    var $parent = $(this).parents('p');

    $parent.find('button').removeAttr('disabled');
  });

  $namesContainer.on('click', 'button', function() {
    var $input = $(this).parents('p').find('input'),
        updatedName = $input.val(),
        nameId = $input.attr('data-nameId');

    updateName(updatedName, nameId);
  });

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/names',
    dataType: 'json'
  })
  .then(function success(names) {
    var html = nameTemplate({
      names: names
    });

    $namesContainer.append(html);
  }, function error() {
    alert('There is a problem with the server. Try later.');
  });

  function updateName(name, nameId) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/name',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        nameId: nameId
      })
    })
    .then(function success() {
      alert('Name saved to database.');
      window.location.reload();
    }, function error() {
      alert('Coult not save name to database.');
      window.location.reload();
    });
  }

});
