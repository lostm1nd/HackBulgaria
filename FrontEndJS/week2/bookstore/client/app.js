$(document).ready(function() {
  'use strict';

  $(document).on('click', '.btn-success', function() {
    var pagesInBook = $(this).parent().find('h3').data('pages'),
        pagesInCart = parseInt($('#total-pages').find('span').text(), 10);

    $(this).parent().appendTo($('#books-in-cart'));
    $('#total-pages').find('span').text(pagesInCart + pagesInBook);

  });

  $(document).on('click', '.btn-info', function() {
    var description = $(this).parent().find('.description');

    if (description.css('display') === 'none') {
      description.css('display', 'block');
    } else {
      description.css('display', '');
    }

  });

  $.getJSON('http://localhost:3000/books', function(books) {
    displayBooks(books);
  });

  function displayBooks(books) {
    var source = $('#book-template').html(),
        template = Handlebars.compile(source),
        colCounter = 0,
        div = $('<div>').addClass('row');

    books.forEach(function(book) {
      var html = template(book);

      if (colCounter < 3) {

        div.append(html);
        colCounter += 1;
      } else {

        $('#books-grid').append(div);
        div = $('<div>').addClass('row');
        div.append(html);
        colCounter = 1;
      }

    });
  }

});
