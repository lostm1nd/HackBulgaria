function JSONBuilder() {
  'use strict';

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
