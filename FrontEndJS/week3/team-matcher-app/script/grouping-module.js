var GROUPING_MODULE = (function() {
  'use strict';

  var $studentsContainer = $('#students'),
      $filterMenu = $('#filter-menu'),
      $modal = $('#grouped-students-modal'),
      $teamSpan = $('<span>').addClass('team'),
      backgroundColor,
      peopleInGroup,
      teamCounter;

  function getNextTeam() {
    backgroundColor = UTILS.getRandomRgbColor();
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

    var filteredStudents = $studentsContainer.find('.row.selected');
      // .find('.available').find('input:checked').parent('.row');

    var jsonBuilder = new JSONBuilder(),
        groupSize = $filterMenu.find('.group-menu').find('input').val(),
        shuffledStudents = _.shuffle(filteredStudents),
        ungroupedStudents = shuffledStudents.length % groupSize;

    groupSize = parseInt(groupSize, 10);

    teamCounter = 1;
    peopleInGroup = 0;
    backgroundColor = UTILS.getRandomRgbColor();

    if (ungroupedStudents === 0 || ungroupedStudents > groupSize / 2) {

      $(shuffledStudents).each(function() {
        jsonBuilder.addData('Team ' + teamCounter, $(this).data('name'));
        appendCloneToModal($(this));
        peopleInGroup += 1;

        if (peopleInGroup == groupSize) {
          getNextTeam();
        }
      });

    } else {

      var offset = 1;
      $(shuffledStudents).each(function() {
        jsonBuilder.addData('Team ' + teamCounter, $(this).data('name'));
        appendCloneToModal($(this));
        peopleInGroup += 1;

        if (peopleInGroup - offset == groupSize) {
          getNextTeam();

          ungroupedStudents -= 1;
          if (ungroupedStudents === 0) {
            offset = 0;
          }
        }
      });

    }

    $modal.append('<a class="close-reveal-modal">&#215;</a>');
    $modal.foundation('reveal', 'open');
    console.log(jsonBuilder.getData());
  }

  return {
    groupStudents: groupStudents
  };

}());
