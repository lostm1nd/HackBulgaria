define(['utils', 'json'], function(utils, jsonModule) {
  'use strict';

  var $closeModalBtn = $('<a>').addClass('close-reveal-modal').html('&#215;'),
      $studentsContainer = $('#students'),
      $filterMenu = $('#filter-menu'),
      $modal = $('#grouped-students-modal'),
      $teamSpan = $('<span>').addClass('team'),
      backgroundColor,
      peopleInGroup,
      teamCounter;

  function getNextTeam() {
    backgroundColor = utils.getRandomRgbColor();
    peopleInGroup = 0;
    teamCounter += 1;
  }

  function appendCloneToModal($student) {
    var $clone = $student.clone();

    $clone.css('background-color', backgroundColor)
      .find('.name').prepend($teamSpan.clone().text('Team ' + teamCounter));

    $clone.appendTo($modal);
  }

  function groupStudents() {
    $modal.empty();

    var filteredStudents = $studentsContainer.find('.row.selected')
      .find('.available').find('input:checked').parents('.row');

    var jsonBuilder = jsonModule.getJSONBuilder(),
        groupSize = $filterMenu.find('.group-menu').find('input').val(),
        shuffledStudents = _.shuffle(filteredStudents);

    groupSize = parseInt(groupSize, 10);
    teamCounter = 1;
    peopleInGroup = 0;
    backgroundColor = utils.getRandomRgbColor();

    $(shuffledStudents).each(function() {
      jsonBuilder.addData('Team ' + teamCounter, $(this).data('name'));
      appendCloneToModal($(this));
      peopleInGroup += 1;

      if (peopleInGroup == groupSize) {
        getNextTeam();
      }
    });

    $modal.append($closeModalBtn);
    $modal.foundation('reveal', 'open');
    console.log(jsonBuilder.getData());
  }

  return {
    groupStudents: groupStudents
  };

});
