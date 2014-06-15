'use strict';

var eventQueue = (function() {
  var events = {};

  function attachEvent(eventName, callback) {
    if (events[eventName]) {
      events[eventName].push(callback);
    } else {
      events[eventName] = [callback];
    }
  }

  function removeEvent(eventName) {
    if (events[eventName]) {
      delete events[eventName];
    }
  }

  function triggerEvent(eventName) {
    if (events[eventName]) {
      events[eventName].forEach(function(callback) {
        callback();
      });
    }
  }

  return {
    on: attachEvent,
    remove: removeEvent,
    trigger: triggerEvent
  };

}());


eventQueue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED!');
});

eventQueue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED AGAIN!');
});

// eventQueue.remove('PANIC_EVENT');

eventQueue.trigger('PANIC_EVENT');
