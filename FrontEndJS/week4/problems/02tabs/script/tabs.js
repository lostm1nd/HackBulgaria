var Tabs = (function($) {
  'use strict';

  var $tabsContainer,
      $tabsAnchors,
      $tabsContent;

  function Tabs(selector) {
    if(!(this instanceof Tabs)) {
      return new Tabs(selector);
    }

    $tabsContainer = $(selector);
    $tabsAnchors = $(selector).find('a');
    $tabsContent = $(selector).find('.tabs-content');
  }

  Tabs.prototype.init = function init() {
    hideAllTabs();
    setAsActive($tabsAnchors.first());
    showTab($tabsAnchors.first().attr('href'));
  };

  Tabs.prototype.changeOn = function changeOn(eventType) {
    $tabsAnchors.on(eventType, changeTab);
  };

  function changeTab() {
    hideAllTabs();
    setAsActive($(this));
    showTab($(this).attr('href'));
  }

  function hideAllTabs() {
    $tabsContent.hide();
  }

  function setAsActive($anchor) {
    $tabsContainer.find('.active').removeClass('active');
    $anchor.addClass('active');
  }

  function showTab(tabID) {
    $tabsContainer.find(tabID).show();
  }

  return Tabs;

}(jQuery));
