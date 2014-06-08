'use strict';

var countBy = require('./count-by').countBy,
    exprectedResult = { 'Frontend JavaScript': 2,
                        'Programming 101': 1,
                        'Core Java': 2
                      },
    students = [{
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

exports.testStudentCountInEachCourse = function(test) {
  test.deepEqual(exprectedResult, countBy(function(x) {
    return x.course;
  }, students));
  test.done();
};
