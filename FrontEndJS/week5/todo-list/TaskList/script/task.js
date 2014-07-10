var TaskModule = (function() {
  'use strict';

  // Hidden variables and functions
  var taskID = 0;

  function getTasksFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('SavedTasks')) || [];
  }

  // Exposed functions
  function addTaskID(options) {
    return {
      title: options.title,
      deadline: options.deadline,
      description: options.description,
      important: options.important,
      id: ++taskID
    };
  }

  function addTasksToList(task, taskTemplate, $taskContainer) {
    var taskWithID = addTaskID(task);
    $taskContainer.append(taskTemplate(taskWithID));
  }

  function saveTaskToLocalStorage(title, deadline, description, important) {
    var allTasks = getTasksFromLocalStorage(),
        newTask = {
          title: title,
          deadline: deadline,
          description: description,
          important: important
        };

    allTasks.push(newTask);
    window.localStorage.setItem('SavedTasks', JSON.stringify(allTasks));

    return newTask;
  }

  function removeTaskFromLocalStorage(taskTitle) {
    var taskArray = getTasksFromLocalStorage(),
        filteredTasks = taskArray.filter(function(task) {
          if (task.title !== taskTitle) {
            return true;
          }

          return false;
        });

    window.localStorage.setItem('SavedTasks', JSON.stringify(filteredTasks));
  }

  return {
    addTaskID: addTaskID,
    addTasksToList: addTasksToList,
    saveTaskToLocalStorage: saveTaskToLocalStorage,
    removeTaskFromLocalStorage: removeTaskFromLocalStorage
  };

}());
