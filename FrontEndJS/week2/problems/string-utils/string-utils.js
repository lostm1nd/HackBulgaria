'use strict';

String.prototype.capitalize = function capitalize() {
  return this.toUpperCase();
};

String.prototype.dasharize = function dasharize() {
  return this.replace(/_/g, '-');
};

String.prototype.times = function times(count) {

  var range = function(str, timesToRepeat) {

    function generate(arr, repeatedSoFar) {
      if (repeatedSoFar === timesToRepeat) {
        return arr;
      }
      return generate(arr.concat(str), repeatedSoFar+1);
    }
    return generate([], 0);
  };

  return range(this, count).join(' ');
};

String.prototype.blank = function blank() {
  return this == false;
};
