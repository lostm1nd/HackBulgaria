'use strict';

var format = function(str, dict) {
  var result = str;

  for (var key in dict) {
    if(dict.hasOwnProperty(key)) {
      result = result.replace(new RegExp(key, 'g'), dict[key]);
    }
  }

  result = result.split('{').join('');
  result = result.split('}').join('');

  return result;
};

var formatted = format('{lang} is a very weird {thing}!', {
  lang: 'JavaScript',
  thing: 'language'
});

console.log(formatted);
