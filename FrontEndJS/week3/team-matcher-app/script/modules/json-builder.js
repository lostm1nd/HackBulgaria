define(function() {
  'use strict';

  function JSONBuilder() {
    if (!(this instanceof JSONBuilder)) {
      return new JSONBuilder();
    }

    var json = {};

    this.addData = function(team, student) {
      if(json[team]) {
        json[team].push(student);
      } else {
        json[team] = [student];
      }
    };

    this.getData = function() {
      return JSON.stringify(json);
    };
  }

  return {
    getJSONBuilder: function() {
      return new JSONBuilder();
    }
  };

});
