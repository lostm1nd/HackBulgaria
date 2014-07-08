/* globals $, Handlebars */

$(document).ready(function() {
  'use strict';

  $(document).on('click', '#save-task', function() {
    var $form = $(this).closest('#form-modal').find('form'),
        taskTitle = $form.find('input[name="title"]').val(),
        taskDeadline = $form.find('input[name="deadline"]').val(),
        taskDescription = $form.find('textarea').val(),
        starred = $form.find('input[name="starred"]').is(':checked');

    var taskObject = {
        title: taskTitle,
        deadline: taskDeadline,
        description: taskDescription,
        starred: starred
    };

    window.localStorage.setItem(taskTitle, JSON.stringify(taskObject));
  });

  $('#get-tasks').on('click', function() {
    var tasksLength = window.localStorage.length,
        index = 0,
        tasks = [],
        item;

    while (index < tasksLength) {
      item = window.localStorage.getItem(window.localStorage.key(index));
      tasks.push(JSON.parse(item));
      index += 1;
    }

    var template = Handlebars.compile($('#task-template').html()),
        html = template({
          tasks: tasks
        });

    $('#tasks-container').append(html);

  });

});
