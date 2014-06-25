var DISPLAY_MODULE = (function() {
  'use strict';

  var $STUDENTS_IN_DOM;

  function displayStudents(students) {
    students = students.filter(FILTER_MODULE.filterEmptyRecords);
    students.sort(SORTING_MODULE.sortingCriteria);

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
    $('#course-select').val(0);
    $('#time-select').val(0);
    $('#filter-menu').find('.group-menu').hide();
    $('#filter-menu').find('.error-message.no-options').hide();
    $('#filter-menu').find('.error-message.no-available').hide();

    $STUDENTS_IN_DOM.each(function() {
      $(this).removeClass('selected').show();
    });
  }

  return {
    displayStudents: displayStudents,
    toggleStudentVisibility: toggleStudentVisibility,
    showAllStudents: showAllStudents
  };

}());
