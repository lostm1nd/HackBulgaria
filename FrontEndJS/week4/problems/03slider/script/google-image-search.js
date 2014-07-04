var ImageSearch = (function() {
  'use strict';
  var imageSearch,
      container,
      isContainerProvided,
      formatFuncCallback;

  google.load("search", "1");
  google.setOnLoadCallback(init);

  function init() {
    imageSearch = new google.search.ImageSearch();
    imageSearch.setSearchCompleteCallback(null, onSearchComplete, null);
  }

  function onSearchComplete() {
    if (imageSearch.results && imageSearch.results.length > 0) {
      imageSearch.results.forEach(function(result) {
        var img = document.createElement('img');
        img.src = result.url;
        container.appendChild(img);
      });

      formatFuncCallback();
    }
  }

  function search(query) {
    if (isContainerProvided) {
      imageSearch.execute(query);
    } else {
      throw new Error('A container must be provided where the search results will be appended.');
    }
  }

  function ImageSearch(selector, outputFormatFunc) {
    container = document.querySelector(selector);
    formatFuncCallback = outputFormatFunc;

    if (container) {
      isContainerProvided = true;
    } else {
      throw new Error('The provided selector is invalid.');
    }
  }

  ImageSearch.prototype.search = search;

  return ImageSearch;

}());
