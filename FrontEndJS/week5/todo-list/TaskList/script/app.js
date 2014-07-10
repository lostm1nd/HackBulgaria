/* globals $, Handlebars */

$(document).ready(function() {
  'use strict';

  var taskTemplate = Handlebars.compile($('#task-template').html()),
      $taskContainer = $('#all-tasks').find('ul'),
      $taskForm = $('#new-task'),
      $optionsForm = $('#new-options'),
      $toggleTaskVisibility = $('#toggle-tasks');

  function saveTaskToLocalStorage() {
    var $form = $('#new-task'),
        taskTitle = $form.find('input[name="title"]').val(),
        taskDeadline = $form.find('input[name="deadline"]').val(),
        taskDescription = $form.find('textarea').val(),
        isImportant = $form.find('input[name="starred"]').is(':checked');

    var newTask = TaskModule.saveTaskToLocalStorage(taskTitle, taskDeadline, taskDescription, isImportant);
    TaskModule.addTasksToList(newTask, taskTemplate, $taskContainer);
  }

  function saveOptionsToLocalStorage() {
    var $form = $('#new-options'),
        userName = $form.find('input[name="username"]').val(),
        avatar = $form.find('input[name="avatar"]')[0].files,
        bgColor = $form.find('input[name="background"]').val(),
        fileReader;

    if (userName) {
      UserModule.saveUsername(userName);
    }

    if (avatar.length > 0) {
      fileReader = new FileReader();
      fileReader.readAsDataURL(avatar[0]);

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        UserModule.saveAvatar(srcData);
      };
    }

    if (bgColor) {
      UserModule.saveBackground(bgColor);
    }
  }

  // Attach event handlers
  $toggleTaskVisibility.on('click', function() {
    if ($(this).attr('data-state') === 'hidden') {
      $('#all-tasks').removeClass('hidden');
      $(this).attr('data-state', 'showing');
      $(this).text('Hide tasks');
    } else {
      $('#all-tasks').addClass('hidden');
      $(this).attr('data-state', 'hidden');
      $(this).text('Show tasks');
    }
  });

  $taskForm.on('click', 'input[type="submit"]', saveTaskToLocalStorage);

  $taskContainer.on('click', 'a.remove-task', function() {
    var $parentLI = $(this).closest('li'),
        taskTitle = $parentLI.find('span.title').text();

    TaskModule.removeTaskFromLocalStorage(taskTitle);
    $parentLI.remove();
  });

  $optionsForm.on('click', 'button', saveOptionsToLocalStorage);

  // Initialize page
  UserModule.loadUser(taskTemplate, $taskContainer);
  $taskContainer.sortable({items: 'li:nth-child(n+2)'});
});
