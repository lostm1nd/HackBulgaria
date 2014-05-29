'use strict';

var toList = require('./number_to_list').toList;

// number_to_list(123) === [1, 2, 3]
// number_to_list(99999) === [9, 9, 9, 9, 9]
// number_to_list(123023) === [1, 2, 3, 0, 2, 3]
// wrong test since we cannot compare two arrays

exports.testToListWith123 = function(test) {
  test.equal([1, 2, 3], toList(123));
  test.done();
};

exports.testToListWith99999 = function(test) {
  test.equal([9, 9, 9, 9, 9], toList(99999));
  test.done();
};

exports.testToListWith123023 = function(test) {
  test.equal([1, 2, 3, 0, 2, 3], toList(123023));
  test.done();
};
