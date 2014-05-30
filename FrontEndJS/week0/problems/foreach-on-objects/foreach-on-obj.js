'use strict';

var forEachOnObj = function (func, obj) {

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      func(prop, obj[prop]);
    }
  }
};


var info = {
    name: 'Rado',
    age: 23
};

forEachOnObj(function(key, value){
  console.log(key + ' - ' + value);
}, info);
