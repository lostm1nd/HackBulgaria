'use strict';

var groupBy = require('./group-by').groupBy;

var students = [{
  'name' : 'Daniel Taskoff',
  'course' : 'Frontend JavaScript'
}, {
  'name' : 'Elena Jeleva',
  'course' : 'Programming 101'
}, {
  'name' : 'Luboslava Dimitrova',
  'course' : 'Frontend JavaScript'
}, {
  'name' : 'Anton Antonov',
  'course' : 'Core Java'
}, {
  'name' : 'Nikola Dichev',
  'course' : 'Core Java'
}];

var studentsResult = { 'Frontend JavaScript':
   [ { name: 'Daniel Taskoff', course: 'Frontend JavaScript' },
     { name: 'Luboslava Dimitrova', course: 'Frontend JavaScript' } ],
  'Programming 101': [ { name: 'Elena Jeleva', course: 'Programming 101' } ],
  'Core Java':
   [ { name: 'Anton Antonov', course: 'Core Java' },
     { name: 'Nikola Dichev', course: 'Core Java' } ] };

var numbers = [1,2,3,4,5,6,7,8,9,10];

var numberResult = {
  'odd': [1,3,5,7,9],
  'even': [2,4,6,8,10]
};

exports.testGrupingStudentsByCourse = function(test) {
  test.deepEqual(studentsResult, groupBy(function(x) {
    return x.course;
  }, students));
  test.done();
};

exports.testGrupingNumbersByOddEven = function(test) {
  test.deepEqual(numberResult, groupBy(function(x) {
    if (x % 2 === 1) {
      return 'odd';
    }
    return 'even';
  }, numbers));
  test.done();
};
