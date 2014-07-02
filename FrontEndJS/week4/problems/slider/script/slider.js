var Slider = (function($) {
  'use strict';

  var $slider;

  function Slider(selector) {
    if (!(this instanceof Slider)) {
      return new Slider(selector);
    }

    $slider = $(selector);
  }

  Slider.prototype.formatSlider = function formatSlider() {
    var $images = $slider.find('img');

    $images.hide();
    $images.first().addClass('current-slide').show();
  };

  Slider.prototype.nextImage = function nextImage() {
    var $nextSlide = $slider.find('img.current-slide').next('img');

    if ($nextSlide.length > 0) {
      $slider.find('img.current-slide')
        .removeClass('current-slide').fadeOut(function() {
          $nextSlide.addClass('current-slide').fadeIn();
        });
    }
  };

  Slider.prototype.prevImage = function prevImage() {
    var $prevSlide = $slider.find('img.current-slide').prev('img');

    if ($prevSlide.length > 0) {
      $slider.find('img.current-slide')
        .removeClass('current-slide').fadeOut(function() {
          $prevSlide.addClass('current-slide').fadeIn();
        });
    }
  };

  return Slider;

}(jQuery));
