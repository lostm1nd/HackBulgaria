'use strict';

var charHistogram = function(str) {
  var result = {};
  str = str.replace(/[!?,.; ]+/g, '');
  str = str.toLowerCase().split('');

  str.forEach(function(ch) {
    if (result[ch] === undefined) {
      result[ch] = 0;
    }
    result[ch] += 1;
  });

  return result;
};

exports.charHist = charHistogram;
