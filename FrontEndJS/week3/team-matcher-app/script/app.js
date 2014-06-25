(function() {
  'use strict';
  var STUDENTS,
      $STUDENTS_IN_DOM;

  $(document).ready(function() {

    $.getJSON('https://hackbulgaria.com/api/students/', function(students) {

      STUDENTS = students;
      displayStudents(students);
      $STUDENTS_IN_DOM = $('#students').find('.row');

      $('#filter-btn').on('click', filterStudents);
      $('#show-all-btn').on('click', showAllStudents);
      $('#group-btn').on('click', groupStudents);

      $('#wrapper').on('mouseenter', '.row', function() {
        $(this).toggleClass('hovered-row');
      }).on('mouseleave', '.row', function() {
        $(this).toggleClass('hovered-row');
      });

    });

  });

  function displayStudents(students) {
    students = students.filter(filterEmptyRecords);
    students.sort(sortingCriteria);

    var source = $('#student-template').html(),
        template = Handlebars.compile(source),
        html = template({
        students: students
      });

    $('#students').append(html);
  }

  function filterEmptyRecords(record) {
    if (record.name !== '' && record.courses.length > 0) {
      return true;
    }

    return false;
  }

  function sortingCriteria(student, otherStudent) {
    var studentCourse = student.courses[0].name + student.courses[0].group,
        otherStudentCourse = otherStudent.courses[0].name + otherStudent.courses[0].group;

    if (student.available && !otherStudent.available) {
      return -1;
    } else if (!student.available && otherStudent.available) {
      return 1;
    } else if (studentCourse < otherStudentCourse) {
      return -1;
    } else if (studentCourse > otherStudentCourse) {
      return 1;
    } else if (student.name < otherStudent.name) {
      return -1;
    } else if (student.name > otherStudent.name) {
      return 1;
    } else {
      return 0;
    }
  }

  function filterStudents() {
    var selectedCourse = $('#course-select').val(),
        selectedTime = $('#time-select').val(),
        filtered;

    $('#filter-menu').find('.error-message').hide();

    if (selectedCourse === null || selectedTime === null) {
      $('#filter-menu').find('.error-message').show();

    } else {
      filtered = STUDENTS.filter(filteringCriteria);

      toggleStudentVisibility(filtered.map(function(st) {
        return st.name;
      }));

      $('#filter-menu').find('.group-menu').show();
    }

    function filteringCriteria(student) {
      var isQualified = false;

      student.courses.forEach(function(course) {
        if (course.name + course.group === selectedCourse + selectedTime) {
          isQualified = true;
        }
      });

      return isQualified;
    }
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

    $STUDENTS_IN_DOM.each(function() {
      $(this).find('.team').remove();

      $(this).removeClass('selected')
        .css('background-color', '')
        .show();
    });
  }

}());