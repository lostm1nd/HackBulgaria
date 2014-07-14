var UserModule = (function(localStorage) {
  'use strict';

  // Hidden variables and functions
  var $greeting = $('#greeting'),
      $avatarContainer = $('#user-avatar'),
      $wrapper = $('#wrapper');

  function updateGreeting(name) {
    if (name) {
      $greeting.text('Hello, ' + name);
    }
  }

  function updateAvatar(dataString) {
    if (dataString) {
      $avatarContainer.attr('src', dataString);
    }
  }

  function updateBackground(color) {
    if (color) {
      $wrapper.css('background-color', color);
    }
  }

  // Exposed functions
  function loadUser(taskTemplate, $taskContainer) {
    var tasks = JSON.parse(localStorage.getItem('SavedTasks')) || [],
        username = localStorage.getItem('Username'),
        avatar = localStorage.getItem('Avatar'),
        background = localStorage.getItem('Background');

    tasks.forEach(function(task) {
      TaskModule.addTasksToList(task, taskTemplate, $taskContainer);
    });

    updateGreeting(username);
    updateAvatar(avatar);
    updateBackground(background);
  }

  function saveUsername(name) {
    if (name) {
      localStorage.setItem('Username', name);
      updateGreeting(name);
    }
  }

  function saveAvatar(dataString) {
    localStorage.setItem('Avatar', dataString);
    updateAvatar(dataString);
  }

  function saveBackground(color) {
    if (color) {
      localStorage.setItem('Background', color);
      updateBackground(color);
    }
  }

  return {
    loadUser: loadUser,
    saveUsername: saveUsername,
    saveAvatar: saveAvatar,
    saveBackground: saveBackground
  };

}(window.localStorage));
