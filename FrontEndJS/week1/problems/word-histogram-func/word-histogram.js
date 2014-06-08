'use strict';

var wordHistogram = function(str) {
  var histogram = {};

  str = str.replace(/[!? ,;]+/g, ' ').trim();
  str = str.toLowerCase().split(' ');

  str.forEach(function(word) {
    if (histogram[word] === undefined) {
      histogram[word] = 0;
    }
    histogram[word] += 1;
  });

  return histogram;
};

exports.wordHist = wordHistogram;
