$(document).ready(function() {
  'use strict';

  var slider = new Slider('#slider'),
      imageSearch = new ImageSearch('#slider', slider.formatSlider);

  $('#search-btn').on('click', function() {
    var imageQuery = $('#search-query').val();
    if (imageQuery) {
      imageSearch.search(imageQuery);
    }
  });

  $('#prev-slide').on('click', slider.prevImage);
  $('#next-slide').on('click', slider.nextImage);

});
