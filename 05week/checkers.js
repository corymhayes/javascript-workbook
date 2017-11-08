'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CF);
    this.color = 'white';
  }
  else {
    this.symbol = String.fromCharCode(0x125CB);
    this.color = 'black';
  }
}

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = () => {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  this.populateGrid = () => {
    // loops through the 8 rows
    for (let row = 0; row < 8; row++) {
      // ignores rows which should be empty
      if (row === 3 || row === 4) continue;
      // loops through the 8 columns
      for (let col = 0; col < 8; col++) {
        // sets current color based on the current row
        let color = (row < 3 ? 'white' : 'black');
        // alternates cells to populate with either white or black checkers
        // then pushes checker to array named checkers
        if (row % 2 === 0 && col % 2 === 1) {
          this.grid[row][col] = new Checker(color);
        } else if (row % 2 === 1 && col % 2 === 0) {
          this.grid[row][col] = new Checker(color);
        }
      }
    }
  };

}

function Game() {
  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.populateGrid();
  };

  this.moveChecker = (start, end) => {
    // if there is a piece at start piece and nothing in the end position, move it to the end position

    // reference the players move
    const pieceToMove = start.split('').map(Number);
    const endingPosition = end.split('').map(Number);

    // reference the grid itself
    let startPiece = this.board.grid[pieceToMove[0]][pieceToMove[1]];
    let endMove = this.board.grid[endingPosition[0]][endingPosition[1]];

    // when moving check for a 'double space' move and if opponent is in the way remove said opponent from the board
    const jumpKill = () => {
      let doubleMoveLeftWhite = this.board.grid[endingPosition[0]+2][endingPosition[1]-2];
      let doubleMoveRightWhite = this.board.grid[endingPosition[0]+2][endingPosition[1]+2];
      let doubleMoveLeftBlack = this.board.grid[endingPosition[0]-2][endingPosition[1]-2];
      let doubleMoveRightBlack = this.board.grid[endingPosition[0]-2][endingPosition[1]+2];

      let possibleMoveLeftWhite = this.board.grid[endingPosition[0]+1][endingPosition[1]-1];
      let possibleMoveRightWhite = this.board.grid[endingPosition[0]+1][endingPosition[1]+1];
      let possibleMoveLeftBlack = this.board.grid[endingPosition[0]-1][endingPosition[1]-1];
      let possibleMoveRightBlack = this.board.grid[endingPosition[0]-1][endingPosition[1]+1];

      // figure out which color is moving
      if(startPiece.color === 'black'){
        // if the black checker is attempting to move more than one space
        if((endingPosition[0] === pieceToMove[0]-2) && (endingPosition[1] === pieceToMove[1]-2)){
          // check if there is a piece to jump and not just a double jump
          if(possibleMoveLeftBlack){
            // if so take it off the gameboard
            console.log(this.board.grid[pieceToMove[0]-1].splice(pieceToMove[1]-1, 1));
          } else {
            console.log('one space at a time');
          }
        } else {
          console.log('keep moving');
        }
      }
    }

    // could have put the two together but like being able to send an error between the two
    if(startPiece){
      if(!endMove){
        jumpKill();
        this.board.grid[endingPosition[0]][endingPosition[1]] = startPiece;
        this.board.grid[pieceToMove[0]][pieceToMove[1]] = null;
      } else {
        return 'already a piece there';
      }
    } else {
      return 'no piece to move';
    }
  };
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
