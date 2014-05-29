'use strict';

var prompt = require('sync-prompt').prompt;

function printBoard(board) {
  var i = 0,
      n = board.length;

  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(''));
  }
}

// checks if the whole board is occupied
function checkForEndGame(board){
  if (board[0].indexOf('*') === -1 &&
      board[1].indexOf('*') === -1 &&
      board[2].indexOf('*') === -1 )  {
    return true;
  }

  return false;
}

function checkWinner(board) {

  var row,
      diag1 = board[0][0] + board[1][1] + board[2][2],
      diag2 = board[0][2] + board[1][1] + board[2][0],
      col0 = board[0][0] + board[1][0] + board[2][0],
      col1 = board[0][1] + board[1][1] + board[2][1],
      col2 = board[0][2] + board[1][2] + board[2][2];

  if (col0==='OOO' || col0  === 'XXX') {
    return true;
  }

  if (col1==='OOO' || col1  === 'XXX') {
    return true;
  }

  if (col2==='OOO' || col2  === 'XXX') {
    return true;
  }

  if (diag2 ==='OOO' || diag2 ==='XXX') {
    return true;
  }

  if (diag1 ==='OOO' || diag1 ==='XXX') {
    return true;
  }

  for (var i = 0; i < board.length; i++) {
    row = board[i].join('');
    if (row === 'XXX' || row === 'OOO') {
      return true;
    }
  }

    return false;
}


// entry point for the game
function gameLoop() {
  var
    board = [ ['*', '*', '*'],
              ['*', '*', '*'],
              ['*', '*', '*'] ],
    position = null,
    playerOneTurn = true,
    playerOneName = prompt('Enter name for player one > '),
    playerTwoName = prompt('Enter name for player two > '),
    validCoordinates = true,
    gameWon = false,
    endGame = false,
    xCoord,
    yCoord;


  while(true) {

    console.log('This is the current state of the board:');
    printBoard(board);

    if(playerOneTurn) {
      console.log(playerOneName + '\'s turn');
    } else {
      console.log(playerTwoName + '\'s turn');
    }

    // this is blocking prompt
    position = prompt('input x y > ');
    position = position.split(' ');
    xCoord = parseInt(position[0], 10);
    yCoord = parseInt(position[1], 10);

    if (xCoord < 1 || xCoord > 3 || yCoord < 1 || yCoord > 3){
      validCoordinates = false;
    }

    if (validCoordinates  && board[xCoord - 1][yCoord - 1] === '*') {

        if (playerOneTurn) {
          board[xCoord - 1][yCoord - 1] = 'X';
        } else {
          board[xCoord - 1][yCoord - 1] = 'O';
        }

        playerOneTurn = !playerOneTurn;

    } else if (validCoordinates  && board[xCoord - 1][yCoord - 1] !== '*') {
      console.log('Position already used.');
    } else {
      console.log('Invalid coordinates. Should be in range [1, 3].');
    }

    gameWon = checkWinner(board);
    if (gameWon) {
      if (playerOneTurn) {
        console.log('Winner is ' + playerTwoName);
      } else {
        console.log('Winner is ' + playerOneName);
      }
        printBoard(board);
        break;
    }

    endGame = checkForEndGame(board);
    if (endGame){
      console.log('No winner');
          printBoard(board);
        break;
    }

  }
}

gameLoop();
