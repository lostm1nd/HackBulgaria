/* globals $, alert, Handlebars */

$(document).ready(function() {
  'use strict';

  var $articleHeaders = $('.row').find('article').find('h2'),
      $studentsContainer = $('#students-container'),
      studentTemplateSource = $('#student-template').html(),
      compiledTemplate = Handlebars.compile(studentTemplateSource);

  $articleHeaders.on('click', function() {
    $(this).next('.options').slideToggle();
  });

  $('article.add-student').find('button').on('click', function() {
    var $options = $(this).closest('.options'),
        firstName = $options.find('.first-name').val(),
        lastName = $options.find('.last-name').val(),
        facNumber = $options.find('.fac-num').val(),
        courses = $options.find('.courses').val();

    courses = courses.split(',').map(function(token) { return token.trim(); });

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
        $options.find('input').val('');
        $studentsContainer.append(compiledTemplate({students: data}));
      },
      error: function() {
        alert('Something went terribly wrong. Try later.');
      }
    });
  });

  $('article.list-student').on('click', 'h2', function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3030/students',
      dataType: 'json',
      success: function(students) {
        var html = compiledTemplate({
          students: students
        });

        $studentsContainer.find('header').nextAll().remove();
        $studentsContainer.append(html).show();
      },
      error: function() {
        alert('Something is terribly wrong with the server. Try later.');
      }
    });
  });

  $('article.delete-student').find('button').on('click', function() {
    var facultyNumber = $(this).closest('.options').find('input').val();
    $(this).closest('.options').find('input').val('');

    deleteStudent(facultyNumber);
  });

  $studentsContainer.on('click', 'button.delete', function() {
    var facultyNumber = $(this).closest('.row').find('p.faculty-num').text();

    deleteStudent(facultyNumber);
  });

  function deleteStudent(facultyNumber) {
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3030/student/' + facultyNumber,
      success: function() {
        $studentsContainer.find('article[data-facultyNum="' + facultyNumber + '"]').remove();
      },
      error: function() {
        alert('Delete request went terribly wrong.');
      }
    });
  }

  $studentsContainer.on('click', 'button.edit', function() {
    var $parent = $(this).closest('.row'),
        name = $parent.find('span.name.on-save').hide().text(),
        courses = $parent.find('span.courses.on-save').hide().text();

    $parent.find('input.name.on-edit').val(name).show();
    $parent.find('input.courses.on-edit').val(courses).show();

    $(this).hide();
    $parent.find('button.save').show();
  });

  $studentsContainer.on('click', 'button.save', function() {
    var $parent = $(this).closest('.row'),
        facultyNumber = $parent.find('p.faculty-num').text(),
        name = $parent.find('input.name.on-edit').hide().val(),
        courses = $parent.find('input.courses.on-edit').hide().val();

    courses = courses.split(',').map(function(token) { return token.trim(); });

    var updateData = {
      name: name,
      facultyNumber: facultyNumber,
      courses: courses
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3030/student',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: function() {
        $parent.find('span.name.on-save').show().text(name);
        $parent.find('span.courses.on-save').show().text(courses);
        $parent.find('button.save').hide();
        $parent.find('button.edit').show();
      },
      error: function() {
        alert('Something went terribly wrong when updating the student.');
      }
    });
  });

});
