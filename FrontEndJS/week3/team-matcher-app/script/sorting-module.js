var SORTING_MODULE = (function() {
  'use strict';

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

  return {
    sortingCriteria: sortingCriteria
  };

}());
