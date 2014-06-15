'use strict';

var queue = (function() {

  var items = [];

  return {
    push: function(item) {
      items.push(item);
    },
    pop: function() {
      items.pop();
    },
    isEmpty: function() {
      return items.length === 0;
    }
  };

}());

console.log(queue.isEmpty());

queue.push('Spaghetti');
queue.push('Pizza');

console.log(queue.isEmpty());
