$(document).ready(function() {
  'use strict';

  $(document).on('click', '.btn-success', function() {
    var pagesInBook = $(this).parent().find('h3').data('pages'),
        pagesInCart = parseInt($('#total-pages').find('span').text(), 10);

    // take the whole book column and append it
    // to the cart and also update the pages in the cart
    $(this).parent().appendTo($('#books-in-cart'));
    $(this).removeClass('btn-success').addClass('btn-danger').text('Remove from cart');
    $('#total-pages').find('span').text(pagesInCart + pagesInBook);

  });

  $(document).on('click', '.btn-danger', function() {
    var pagesInBook = $(this).parent().find('h3').data('pages'),
        pagesInCart = parseInt($('#total-pages').find('span').text(), 10),
        rowToWhichToAppend = $(this).parent().data('row');

    // remove the book from the cart and append it
    // to whatever row it was initialy on
    // update the pages in the cart
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
        div = $('<div>').addClass('row').attr('data-row', rowCounter),
        decoderLevelOne = $('<div>'),
        decoderLevelTwo = $('<div>');

    // we want three books on each
    // row so we keep a counter
    // and when we append three books
    // to the row we then append the row
    // to the grid and create a new row
    // --------------------------------
    // we also need a rowcounter which
    // tracks which row the book should
    // be on so when we add the book to
    // the cart and then remove it we
    // append the book to the row from
    // which we took it initially
    books.forEach(function(book) {
      if (colCounter < 4) {
        colCounter += 1;
      } else {
        $('#books-grid').append(div);
        rowCounter += 1;        
        colCounter = 2;
        div = $('<div>').addClass('row').attr('data-row', rowCounter);
      }

      book.title = decodeString(book.title);
      book.description = decodeString(book.description);
      book.row = rowCounter;
      var html = template(book);
      div.append(html);

    });

    function decodeString(str) {
      // takes the json string and convert it
      // to HTML string
      // &amp;lt;p&amp;gt; -> <p>
      decoderLevelOne.html(str);
      decoderLevelTwo.html(decoderLevelOne.text());
      return decoderLevelTwo.text();
    }
  }

});
