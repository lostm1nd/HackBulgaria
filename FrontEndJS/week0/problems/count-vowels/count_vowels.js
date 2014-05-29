'use strict';

var count_vowels = function(str) {
  var vowels = 'aeiouy',
      vowelCount = 0;

  for (var i = 0; i < str.length; i++) {
    if(vowels.indexOf(str[i].toLowerCase()) >= 0) {
      vowelCount +=1;
    }
  }

  return vowelCount;
};

exports.vowels = count_vowels;
