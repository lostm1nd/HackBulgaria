/* globals $, alert */

$(document).ready(function() {
  'use strict';

  var $articleHeaders = $('.row').find('article').find('h2');

  $articleHeaders.on('click', function() {
    $(this).next('.options').slideToggle();
  });

  $('article.add-update-student').find('button').on('click', function() {
    var $options = $(this).closest('.options'),
        firstName = $options.find('.first-name').val(),
        lastName = $options.find('.last-name').val(),
        facNumber = $options.find('.fac-num').val(),
        courses = $options.find('.courses').val();

    courses = courses.split(',').join(' ').split(' ').filter(String);

    var data = {
      name: firstName + ' ' + lastName,
      facultyNumber: facNumber,
      courses: courses
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3030/student',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function() {
        alert('Student saved to database.');
      },
      error: function() {
        alert('Something went terribly wrong. Try later.');
      }
    });
  });

});
