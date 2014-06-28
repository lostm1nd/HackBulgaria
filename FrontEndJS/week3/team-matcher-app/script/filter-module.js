var FILTER_MODULE = (function() {
  'use strict';

  var $filterMenu = $('#filter-menu'),
      $courseSelect = $('#course-select'),
      $timeSelect = $('#time-select'),
      selectedCourse,
      selectedTime;

  function filterEmptyRecords(record) {
    if (record.name !== '' && record.courses.length > 0) {
      return true;
    }
    return false;
  }

  function filterStudents(students) {
    selectedCourse = $courseSelect.val();
    selectedTime = $timeSelect.val();

    $filterMenu.find('.error-message.no-options').hide();
    $filterMenu.find('.error-message.no-available').hide();

    if (selectedCourse === null || selectedTime === null) {
      $filterMenu.find('.error-message.no-options').show();
    } else {
      var filtered = students.filter(filteringCriteria).map(function(st) {
        return st.name;
      });

      DISPLAY_MODULE.toggleStudentVisibility(filtered);
      $filterMenu.find('.group-menu').show();
    }
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

  return {
    filterEmptyRecords: filterEmptyRecords,
    filterStudents: filterStudents
  };

}());
