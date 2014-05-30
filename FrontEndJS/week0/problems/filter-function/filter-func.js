'use strict';

var filter = function(predicate, array) {
  var len = array.length,
      result = [];

  for (var i = 0; i < len; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

var users = [{
    'name' : 'Rado',
    'score' : 50
}, {
    'name' : 'Ivan',
    'score' : 67
}, {
    'name' : 'Vlado',
    'score' : 30
}];

var filteredUsers = filter(function(user) {
  return user.score > 40;
}, users);

console.log(filteredUsers);
