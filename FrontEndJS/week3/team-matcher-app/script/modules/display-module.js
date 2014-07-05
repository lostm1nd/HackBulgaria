define(['filter', 'sort'], function(filterModule, sortModule) {
  'use strict';

  var $filterMenu = $('#filter-menu'),
      $courseSelect = $('#course-select'),
      $timeSelect = $('#time-select'),
      $STUDENTS_IN_DOM;

  function displayStudents(students) {
    students = students.filter(filterModule.filterEmptyRecords);
    students.sort(sortModule.sortingCriteria);

    var source = $('#student-template').html(),
        template = Handlebars.compile(source),
        html = template({
        students: students
      });

    $('#students').append(html);
    $STUDENTS_IN_DOM = $('#students').find('.row');
  }

  function toggleStudentVisibility(studentsNames) {
    $STUDENTS_IN_DOM.each(function() {
      var $row = $(this);

      if (studentsNames.indexOf($row.data('name')) === -1) {
        $row.removeClass('selected').hide();
      } else {
        $row.addClass('selected').show();
      }
    });
  }

  function showAllStudents() {
    $courseSelect.val(0);
    $timeSelect.val(0);
    $filterMenu.find('.group-menu').hide();
    $filterMenu.find('.error-message.no-options').hide();
    $filterMenu.find('.error-message.no-available').hide();

    $STUDENTS_IN_DOM.each(function() {
      $(this).removeClass('selected').show();
    });
  }

  return {
    displayStudents: displayStudents,
    toggleStudentVisibility: toggleStudentVisibility,
    showAllStudents: showAllStudents
  };

});
