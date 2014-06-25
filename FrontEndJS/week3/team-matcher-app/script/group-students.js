function groupStudents() {
  'use strict';

  var appendCloneToModal = function($student) {
    var $clone = $student.clone();

    $clone.css('background-color', backgroundColor)
      .find('.name').prepend($teamSpan.clone().text('Team ' + teamCounter));

    $clone.appendTo($modal);
  };

  var getNextTeam = function() {
    backgroundColor = getRandomRgbColor();
    peopleInGroup = 0;
    teamCounter += 1;
  };

  var filteredStudents = $('#students').find('.row.selected')
    .find('.available').find('input:checked').parent('.row');

  var groupSize = $('#filter-menu').find('.group-menu').find('input').val(),
      $modal = $('#grouped-students-modal');

  $modal.empty();
  groupSize = parseInt(groupSize, 10);

  var $teamSpan = $('<span>').addClass('team'),
      teamCounter = 1,
      peopleInGroup = 0,
      backgroundColor = getRandomRgbColor(),
      jsonBuilder = new JSONBuilder();

  var shuffledStudents = _.shuffle(filteredStudents),
      ungroupedStudents = shuffledStudents.length % groupSize;

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
