(function() {
  'use strict';
  var STUDENTS;

  $(document).ready(function() {

    $.getJSON('https://hackbulgaria.com/api/students/', function(students) {
      STUDENTS = students;
      displayStudents(students);
      $('#filter-btn').on('click', filterStudents);
      $('#show-all-btn').on('click', showAllStudents);
    });

  });

  function displayStudents(students) {

    var source = $('#student-template').html(),
        template = Handlebars.compile(source),
        html = template({students: students});

    $('#wrapper').append(html);
  }

  function filterStudents() {

    var selectedCourse = $('#course-select').val(),
        selectedTime = $('#time-select').val();

    $('#filter-menu').find('.select-message').hide();

    if (selectedCourse === null || selectedTime === null) {
      $('#filter-menu').find('.select-message').show();
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
    var $studentsInDom = $('#wrapper').find('.row');

    $studentsInDom.each(function() {
      var $row = $(this);
      if (filtered.indexOf($row.data('name')) === -1) {
        $row.hide();
      } else {
        $row.show();
      }
    });
  }

  function showAllStudents() {
    var $studentsInDom = $('#wrapper').find('.row');

    $studentsInDom.each(function() {
      $(this).show();
    });
  }

}());
