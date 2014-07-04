(function($) {
  'use strict';

  $.fn.accordion = function() {
    var $accordion = this;

    // Hide all elements but the first
    $accordion.find('dd').hide();
    $accordion.find('dd').first().addClass('selected-dd').show();

    $accordion.on('click', 'dt', function(event) {
      event.preventDefault();

      var $ddToShow = $(this).next('dd');

      // Do not take action if we click on the
      // <dt> for which we currently display the <dd>.
      if (!$ddToShow.hasClass('selected-dd')) {
        $accordion.find('.selected-dd').removeClass('selected-dd').slideUp();
        $ddToShow.addClass('selected-dd').slideDown();
      }
    });
  };

}(jQuery));
