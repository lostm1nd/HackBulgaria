(function() {
  'use strict';

  var _ = require('lodash'),
      data = require('./data');

  _.chain(data)
    .groupBy(function(checkin) {
      return checkin.fields.student + '-' + checkin.fields.date;
    })
    .map(function(value) {
      return value[1];
    })
    .compact()
    .each(function(duplicate) {
      console.log(duplicate);
    });

}());
