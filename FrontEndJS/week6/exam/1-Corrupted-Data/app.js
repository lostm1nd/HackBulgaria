(function() {
  'use strict';

  var data = require('./data'),
      unique = {},
      duplicates = [];

  data.forEach(function(checkin) {

    var studentId = checkin.fields.student,
        foundDuplicate = false;

    if (unique[studentId]) {

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
      unique[studentId] = [checkin];
    }

  });

  console.log(duplicates);

}());

