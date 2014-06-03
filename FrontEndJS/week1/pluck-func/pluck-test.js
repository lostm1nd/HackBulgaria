'use strict';

var pluck = require('./pluck').pluck;

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

var expected = ['Daniel Taskoff', 'Elena Jeleva',
'Luboslava Dimitrova', 'Anton Antonov', 'Nikola Dichev'];

exports.testForStudentsName = function(test) {
  test.deepEqual(expected, pluck('name', students));
  test.done();
};
