(function() {
  'use strict';

  $.fn.tabs = function() {
    var $tabs = this,
        $tabsAnchors = this.find('a'),
        $tabsContent = this.find('.tabs-content');

    // Add click event listener for changing
    // the current tab based on the anchor href attribute
    $tabsAnchors.on('click', function() {
      $tabsContent.hide();
      setActiveAnchor($tabs, $(this));
      showTab($tabs, $(this).attr('href'));
    });

    // Show the first tab
    $tabsAnchors.first().trigger('click');
  };

  function setActiveAnchor($container, $anchor) {
    $container.find('.active').removeClass('active');
    $anchor.addClass('active');
  }

  function showTab($container, tabID) {
    $container.find(tabID).show();
  }

}(jQuery));
