'use strict';

var find = require('./find').find;

exports.testForString = function(test) {
  test.equal('art', find(function(x) {
    if (x === 'art') {
      return true;
    }
    return false;
  }, ['row', 'book', 'art', 'roll']));
  test.done();
};

exports.testForStringUndefined = function(test) {
  test.equal(undefined, find(function(x) {
    if (x === 'artpool') {
      return true;
    }
    return false;
  }, ['row', 'book', 'art', 'roll']));
  test.done();
};

exports.testForNumbers = function(test) {
  test.equal(12, find(function(x) {
    if (x === 12) {
      return true;
    }
    return false;
  }, [4, 2, 1, 12]));
  test.done();
};

exports.testForNumberUndefinded = function(test) {
  test.equal(undefined, find(function(x) {
    if (x === 16) {
      return true;
    }
    return false;
  }, [4, 2, 1, 12]));
  test.done();
};
