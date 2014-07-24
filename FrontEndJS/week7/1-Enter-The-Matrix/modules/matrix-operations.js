/* globals define */

define(['modules/matrix'], function(Matrix) {
  'use strict';

  function createFromArray(data) {
    var colLen = data[0].length,
        validData = data.every(function(row) {
          return row.length === colLen;
        });

    if (!validData) {
      throw new Error('Each column in the data must be of the same size.');
    }

    var matrix = new Matrix(data.length, data[0].length);

    data.forEach(function(row, indexRow) {
      row.forEach(function(col, indexCol) {
        matrix.setCellAt(indexRow, indexCol, col);
      });
    });

    return matrix;
  }

  function transpose(matrix) {
    if (!(matrix instanceof Matrix)) {
      throw new TypeError('The matrix must be of type Matrix.');
    }

    var transposed = new Matrix(matrix.getCols(), matrix.getRows());

    matrix.getData().forEach(function(row, indexRow) {
      row.forEach(function(cell, indexCol) {
        transposed.setCellAt(indexCol, indexRow, cell);
      });
    });

    return transposed;
  }

  function add(matrix1, matrix2) {
    if (!(matrix1 instanceof Matrix) || !(matrix2 instanceof Matrix)) {
      throw new TypeError('Arguments must be of type Matrix.');
    }

    if (matrix1.getRows() !== matrix2.getRows() ||
        matrix1.getCols() !== matrix2.getCols()) {
      throw new Error('Matrices must be of the same size.');
    }

    var matrixSum = new Matrix(matrix1.getRows(), matrix1.getCols());

    matrixSum.getData().forEach(function(row, indexRow) {
      row.forEach(function(cell, indexCol) {
        var sum = matrix1.getCellAt(indexRow, indexCol) +
          matrix2.getCellAt(indexRow, indexCol);

        matrixSum.setCellAt(indexRow, indexCol, sum);
      });
    });

    return matrixSum;
  }

  function scalarMultiplication(scalar, matrix) {
    if (isNaN(scalar) || !isFinite(scalar)) {
      throw new TypeError('Scalar muse be a finite number.');
    }

    if (!(matrix instanceof Matrix)) {
      throw new TypeError('The matrix must be of type Matrix.');
    }

    var multiplied = new Matrix(matrix.getRows(), matrix.getCols());

    matrix.getData().forEach(function(row, indexRow) {
      row.forEach(function(cell, indexCol) {
        var result = matrix.getCellAt(indexRow, indexCol) * scalar;
        multiplied.setCellAt(indexRow, indexCol, result);
      });
    });

    return multiplied;
  }

  function multiply(matrix1, matrix2) {
    // Implement me
  }

  return {
    transpose: transpose,
    createFromArray: createFromArray,
    add: add,
    scalarMultiplication: scalarMultiplication,
    multiply: multiply
  };

});
