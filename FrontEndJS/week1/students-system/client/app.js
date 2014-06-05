'use strict';

$(document).ready(function() {
  // alert('Hooray, everything runs ok. You can remove this annoying alert from the code.');

  var STUDENTS_GLOBAL = [];

  function groupBy(groupingFunction, arr) {
    var result = {};

    arr.forEach(function(x) {
      var key = groupingFunction(x);

      if (result[key]) {
        result[key].push(x);
      } else {
        result[key] = [x];
      }
    });

    return result;
  }

  function generateTable(students) {
    var table = ['<div class="row">',
                '<div class="col-xs-12">',
                '<table class="table">',
                '<thead>',
                '<tr>',
                '<th>', 'Id', '</th>',
                '<th>', 'Name', '</th>',
                '<th>', 'Course', '</th>',
                '</tr>',
                '</thead>',
                '<tbody>'];

     students.forEach(function(std) {
        table.push('<tr class="student-' + std.id + '">');
        table.push('<td>', std.id, '</td>');
        table.push('<td>', std.name, '</td>');
        table.push('<td>', std.course, '</td>');
        table.push('</tr>');
      });

     table.push('</tbody>', '</table>', '</div>', '</div>');
     return table.join('');
  }

  $.getJSON('http://localhost:3000/students', function(students) {
      // console.log(textStatus);
      // console.log(students);

      // alert('Students came. Open your console and remove this alert!');
      //start here
      STUDENTS_GLOBAL = students;

      $('#table-container').append(generateTable(STUDENTS_GLOBAL));
  });

  $('#group-btn').on('click', function() {
    // alert('What are you looking at? Go implement that logic.');
    $('#table-container').empty();

    var groups = groupBy(function(x) {
      return x.course;
    }, STUDENTS_GLOBAL);

    console.log(groups);

    Object.keys(groups).forEach(function(group) {
      $('#table-container').append(generateTable(groups[group]));
      //console.log(group);
    });

  });

  $('#search-btn').on('click', function() {
    $('tr').removeClass('success');

    var searchedName = $('#search-box').val();
    var searchedId = '.student-';

    STUDENTS_GLOBAL.forEach(function(std) {
      if (std.name.indexOf(searchedName) === 0) {
        searchedId += std.id;
      }
    });

    $(searchedId).addClass('success');
  });
});
