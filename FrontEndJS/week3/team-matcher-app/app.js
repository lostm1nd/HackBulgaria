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

      $('#wrapper').on('mouseenter', '.row', function() {
        $(this).toggleClass('hovered-row');
      }).on('mouseleave', '.row', function() {
        $(this).toggleClass('hovered-row');
      });

    });

  });

  function displayStudents(students) {

    students.sort(sortByAvailability);
    students.sort(sortByCourseName);
    students.sort(sortByStudentName);

    var source = $('#student-template').html(),
        template = Handlebars.compile(source),
        html = template({students: students});

    $('#students').append(html);
  }

  function sortByAvailability(student, otherStudent) {
    if (student.available && !otherStudent.available) {
      return -1;
    } else if (!student.available && otherStudent.available) {
      return 1;
    } else {
      return 0;
    }
  }

  function sortByCourseName(student, otherStudent) {
    if (student.courses.length > 0 && otherStudent.courses.length > 0) {
      if (student.courses[0].name < otherStudent.courses[0].name) {
        return -1;
      } else if (student.courses[0].name > otherStudent.courses[0].name) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function sortByStudentName(student, otherStudent) {
    if (student.name && otherStudent.name) {
      if (student.name < otherStudent.name) {
        return -1;
      } else if (student.name > otherStudent.name) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function filterStudents() {

    var selectedCourse = $('#course-select').val(),
        selectedTime = $('#time-select').val();

    $('#filter-menu').find('.error-message').hide();

    if (selectedCourse === null || selectedTime === null) {
      $('#filter-menu').find('.error-message').show();
    } else {
      var byCourse = STUDENTS.filter(filterByCourse);
      var byTime = byCourse.filter(filterByTime);
      toggleStudentVisibility(byTime.map(function(st){
        return st.name;
      }));
    }

    function filterByCourse(student) {
      var isQualified = false,
          courseName = (selectedCourse === 'js') ?
                    'Frontend JavaScript' :
                    'Core Java';

      student.courses.forEach(function(course) {
        if (course.name === courseName) {
          isQualified = true;
        }
      });

      return isQualified;
    }

    function filterByTime(student) {
      var isQualified = false,
          time = parseInt(selectedTime, 10);

      student.courses.forEach(function(course) {
        if (course.group === time) {
          isQualified = true;
        }
      });

      return isQualified;
    }
  }

  function toggleStudentVisibility(filtered) {
    $STUDENTS_IN_DOM.each(function() {
      var $row = $(this);
      if (filtered.indexOf($row.data('name')) === -1) {
        $row.hide();
      } else {
        $row.show();
      }
    });
  }

  function showAllStudents() {
    $STUDENTS_IN_DOM.each(function() {
      $(this).show();
    });
  }

}());
