(function() {
  'use strict';

  var data = require('./data'),
      unique = {},
      duplicates = [];

  data.forEach(function(checkin) {

    var studentId = checkin.fields.student,
        foundDuplicate;

    if (unique[studentId]) {

      foundDuplicate = false;
      unique[studentId].forEach(function(studentCheckin) {
        if (studentCheckin.fields.date === checkin.fields.date) {
          foundDuplicate = true;
          duplicates.push(checkin);
        }
      });

      if (!foundDuplicate) {
        unique[studentId].push(checkin);
      }

    } else {
      unique[studentId] = [];
      unique[studentId].push(checkin);
    }

  });

  console.log(duplicates);

}());

