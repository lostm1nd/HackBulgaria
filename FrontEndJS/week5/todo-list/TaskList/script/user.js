var UserModule = (function() {
  'use strict';

  // Hidden variables and functions
  var $greeting = $('#greeting'),
      $avatarContainer = $('#user-avatar'),
      $wrapper = $('#wrapper');

  function updateGreeting(name) {
    $greeting.text('Hello, ' + name);
  }

  function updateAvatar(dataString) {
    $avatarContainer.attr('src', dataString);
  }

  function updateBackground(color) {
    $wrapper.css('background-color', color);
  }

  // Exposed functions
  function loadUser(taskTemplate, $taskContainer) {
    var tasks = JSON.parse(window.localStorage.getItem('SavedTasks')),
        username = window.localStorage.getItem('Username'),
        avatar = window.localStorage.getItem('Avatar'),
        background = window.localStorage.getItem('Background');

    if (tasks) {
      tasks.forEach(function(task) {
        TaskModule.addTasksToList(task, taskTemplate, $taskContainer);
      });
    }

    if (username) {
      updateGreeting(username);
    }

    if (avatar) {
      updateAvatar(avatar);
    }

    if (background) {
      updateBackground(background);
    }
  }

  function saveUsername(name) {
    window.localStorage.setItem('Username', name);
    updateGreeting(name);
  }

  function saveAvatar(dataString) {
    window.localStorage.setItem('Avatar', dataString);
    updateAvatar(dataString);
  }

  function saveBackground(color) {
    window.localStorage.setItem('Background', color);
    updateBackground(color);
  }

  return {
    loadUser: loadUser,
    saveUsername: saveUsername,
    saveAvatar: saveAvatar,
    saveBackground: saveBackground
  };

}());
