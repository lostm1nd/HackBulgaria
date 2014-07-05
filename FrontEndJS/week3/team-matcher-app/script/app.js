$(document).ready(function() {
  'use strict';

  require.config({
    paths: {
      'display': 'modules/display-module',
      'filter': 'modules/filter-module',
      'group': 'modules/grouping-module',
      'sort': 'modules/sorting-module',
      'json': 'modules/json-builder',
      'utils': 'modules/utils'
    }
  });

  require(['display', 'filter', 'group'], function(displayModule, filterModule, groupModule) {

    $.getJSON('https://hackbulgaria.com/api/students/', function(students) {

      displayModule.displayStudents(students);

      $('#filter-btn').on('click', function() {
        filterModule.filterStudents(students);
      });

      // Set the display of all students from none back to normal.
      $('#show-all-btn').on('click', displayModule.showAllStudents);

      // On clicking the group button check whether there
      // are any available students:
      // if there are -> group them
      // if there are none -> show error message
      $('#group-btn').on('click', function() {
        var availableStudents = $('#students').find('.row.selected')
        .find('.available').find('input:checked').parents('.row');

        $('#filter-menu').find('.error-message.no-available').hide();

        if(availableStudents.length === 0) {
          $('#filter-menu').find('.error-message.no-available').show();
        } else {
          groupModule.groupStudents();
        }
      });

      // Color the hovered row for better experience.
      $('#students').on('mouseenter', '.row', function() {
        $(this).toggleClass('hovered-row');
      }).on('mouseleave', '.row', function() {
        $(this).toggleClass('hovered-row');
      });

      // Add functionality that checks or unchecks
      // the checkbox in each row when this row is clicked.
      $('#students').on('click', '.row', function() {
        var $input = $(this).find('.available').find('input');
        $input.trigger('click');
      });

    }); // getJSON ends here

  }); // require ends here

});
