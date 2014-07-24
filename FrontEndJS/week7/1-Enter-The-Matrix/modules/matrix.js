/* globals define */

define(function() {
  'use strict';

  // Hidden utility functions
  function isValidNumber(value) {
    var checkForNan = isNaN(value);
    var checkIsFinite = isFinite(value);
    var isInteger = value === parseInt(value, 10);

    return (!checkForNan && checkIsFinite && isInteger);
  }

  function isIndexValid(index, prop) {
    var isValidNum = isValidNumber(index);
    var isIndexInRange = 0 <= index && index < this[prop]();

    return isValidNum && isIndexInRange;
  }

  function createMatrix(rows, cols) {
    var matrix = [];

    for (var i = 0; i < rows; i+=1) {
      matrix[i] = [];

      for (var j = 0; j < cols; j+=1) {
        matrix[i].push(0);
      }
    }

    return matrix;
  }

  // Public Matrix interface
  function Matrix(rows, cols) {
    if (isValidNumber(rows) && isValidNumber(cols)) {
      this._matrix = createMatrix(rows, cols);
    } else {
      throw new TypeError('Rows and cols must be an integer number.');
    }
  }

  Matrix.prototype.getRows = function getRows() {
    return this._matrix.length;
  };

  Matrix.prototype.getCols = function getCols() {
    return this._matrix[0].length;
  };

  Matrix.prototype.getRowAt = function getRowAt(index) {
    if (!isIndexValid.call(this, index, 'getRows')) {
      throw new Error('Invalid index.');
    }

    return this._matrix[index];
  };

  Matrix.prototype.getColAt = function getColAt(index) {
    if (!isIndexValid.call(this, index, 'getCols')) {
      throw new Error('Invalid index.');
    }

    return this._matrix.map(function(row) {
      return row[index];
    });
  };

  Matrix.prototype.setRowAt = function setRowAt(index, value) {
    if (!isIndexValid.call(this, index, 'getRows')) {
      throw new Error('Invalid index.');
    }

    this._matrix[index] = value;
  };

  Matrix.prototype.setColAt = function setColAt(index, value) {
    if (!isIndexValid.call(this, index, 'getCols')) {
      throw new Error('Invalid index.');
    }

    this._matrix.forEach(function(row) {
      row[index] = value;
    });
  };

  Matrix.prototype.getCellAt = function getCellAt(row, col) {
    if (!isIndexValid.call(this, row, 'getRows') ||
        !isIndexValid.call(this, col, 'getCols')) {
      throw new TypeError('Invalid row or col.');
    }

    return this._matrix[row][col];
  };

  Matrix.prototype.setCellAt = function setCellAt(row, col, value) {
    if (!isIndexValid.call(this, row, 'getRows') ||
        !isIndexValid.call(this, col, 'getCols')) {
      throw new TypeError('Invalid row or col.');
    }

    this._matrix[row][col] = value;
  };

  Matrix.prototype.getData = function getData() {
    return this._matrix.map(function(row) {
      return row.slice();
    });
  };

  Matrix.prototype.toString = function toString() {
    return this._matrix.map(function(row) {
      return row.join(' ') + '\n';
    }).join('');
  };

  return Matrix;

});
