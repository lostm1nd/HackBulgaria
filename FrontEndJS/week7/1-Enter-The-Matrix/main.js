/* globals require, console */

require(['modules/matrix',
  'modules/matrix-operations'], function(Matrix, operations) {
  'use strict';

  var matrix = new Matrix(5, 5);

  console.log(matrix.toString());

  matrix.setCellAt(3, 3, 9);

  console.log(matrix.toString());

  var matrix2 = operations.createFromArray([[1,2],[3,4],[5,6]]);

  console.log(matrix2.toString());

  var transposed = operations.transpose(matrix2);

  console.log(transposed.toString());

  var matrix3 = operations.createFromArray([[1,2],[3,4],[5,6]]);

  var summed = operations.add(matrix2, matrix3);

  console.log(summed.toString());

  var scalared = operations.scalarMultiplication(3, summed);

  console.log(scalared.toString());
});
