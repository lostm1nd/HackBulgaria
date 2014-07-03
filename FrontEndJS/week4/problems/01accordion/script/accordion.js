var Accordion = (function($) {
  'use strict';

  var $accordion;

  function Accordion(selector) {
    if (!(this instanceof Accordion)) {
      return new Accordion(selector);
    }

    $accordion = $(selector);
  }

  Accordion.prototype.init = function init() {
    $accordion.find('dd').hide();
    $accordion.find('dd').first().addClass('selected-dd').show();
  };

  Accordion.prototype.expandOn = function expandOn(eventType) {
    $accordion.on(eventType, 'dt', expand);
  };

  function expand(event) {
    var $ddToShow = $(this).next('dd');

    // Dont know why if preventDefault is not invoked
    // the first item is the one that is always shown.
    // Obviously the click event travels up to the <dl>
    // and click on the <dl> translates into click
    // on the first <a> tag ????????????????????
    event.preventDefault();

    // Do not take action if we click on the
    // <dt> for which we currently display the <dd>.
    if (!$ddToShow.hasClass('selected-dd')) {
      $accordion.find('.selected-dd').removeClass('selected-dd').slideUp();
      $ddToShow.addClass('selected-dd').slideDown();
    }
  }

  return Accordion;

}(jQuery));
