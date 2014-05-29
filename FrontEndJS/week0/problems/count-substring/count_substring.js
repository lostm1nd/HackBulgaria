'use strict';

var count_substrings = function(haystack, needle) {
  var indexOfNeedle = haystack.indexOf(needle),
      count = 0;

  while (indexOfNeedle >= 0) {
    count +=1;
    indexOfNeedle = haystack.indexOf(needle, indexOfNeedle + needle.length);
  }

  return count;
};


exports.count = count_substrings;
