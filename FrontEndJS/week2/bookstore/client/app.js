$(document).ready(function() {
  'use strict';

  $(document).on('click', '.btn-success', function() {
    var pagesInBook = $(this).parent().find('h3').data('pages'),
        pagesInCart = parseInt($('#total-pages').find('span').text(), 10);

    $(this).parent().appendTo($('#books-in-cart'));
    $(this).removeClass('btn-success').addClass('btn-danger').text('Remove from cart');
    $('#total-pages').find('span').text(pagesInCart + pagesInBook);

  });

  $(document).on('click', '.btn-danger', function() {
    var pagesInBook = $(this).parent().find('h3').data('pages'),
        pagesInCart = parseInt($('#total-pages').find('span').text(), 10),
        rowToWhichToAppend = $(this).parent().data('row');

    $(this).parent().appendTo($('.row[data-row="' + rowToWhichToAppend + '"]'));
    $(this).removeClass('btn-danger').addClass('btn-success').text('Add to cart');
    $('#total-pages').find('span').text(pagesInCart - pagesInBook);

  });

  $.getJSON('http://localhost:3000/books', function(books) {
    displayBooks(books);
  });

  function displayBooks(books) {
    var source = $('#book-template').html(),
        template = Handlebars.compile(source),
        colCounter = 1,
        rowCounter = 1,
        div = $('<div>').addClass('row').attr('data-row', rowCounter);

    books.forEach(function(book) {
      if (colCounter < 4) {
        colCounter += 1;
      } else {
        $('#books-grid').append(div);

        rowCounter += 1;        
        colCounter = 2;

        div = $('<div>').addClass('row').attr('data-row', rowCounter);
      }

      book.row = rowCounter;
      var html = template(book);
      div.append(html);

    });
  }

});
