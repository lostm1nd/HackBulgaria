$(document).ready(function() {
  'use strict';

  $.getJSON('https://hackbulgaria.com/api/students/', function(students) {

    DISPLAY_MODULE.displayStudents(students);

    $('#filter-btn').on('click', function() {
      FILTER_MODULE.filterStudents(students);
    });

    $('#show-all-btn').on('click', DISPLAY_MODULE.showAllStudents);

    $('#group-btn').on('click', function() {
      // var availableStudents = $('#students').find('.row.selected')
      // .find('.available').find('input:checked').parent('.row');

      // $('#filter-menu').find('.error-message.no-available').hide();

      // if(availableStudents.length === 0) {
      //   $('#filter-menu').find('.error-message.no-available').show();
      // } else {
      //   groupStudents();
      // }
      GROUPING_MODULE.groupStudents();
    });

    $('#wrapper').on('mouseenter', '.row', function() {
      $(this).toggleClass('hovered-row');
    }).on('mouseleave', '.row', function() {
      $(this).toggleClass('hovered-row');
    });

  });

});
