'use strict';

var groupBy = function(groupingFunction, arr) {
  var result = {};

  arr.forEach(function(x) {
    var key = groupingFunction(x);

    if (result[key]) {
      result[key].push(x);
    } else {
      result[key] = [x];
    }
  });

  return result;
};

exports.groupBy = groupBy;

// var students = [{
//   'name' : 'Daniel Taskoff',
//   'course' : 'Frontend JavaScript'
// }, {
//   'name' : 'Elena Jeleva',
//   'course' : 'Programming 101'
// }, {
//   'name' : 'Luboslava Dimitrova',
//   'course' : 'Frontend JavaScript'
// }, {
//   'name' : 'Anton Antonov',
//   'course' : 'Core Java'
// }, {
//   'name' : 'Nikola Dichev',
//   'course' : 'Core Java'
// }];

// var obj = groupBy(function(x) {
//   return x.course;
// }, students);

// console.log(obj);
