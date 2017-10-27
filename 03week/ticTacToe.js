'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  ['X', ' ', ' '],
  ['X', ' ', ' '],
  [' ', 'O', 'O']
];

let playerTurn = 'X';
let winState = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
	/*

		a horizontalWin is if playerTurn, X or 0 occupies board[0], board[1], board[2]
		forEach(), return win

	 */

	board.map((val) => {
		if(val.join('') === 'XXX' || val.join('') === 'OOO'){
			winState = true;
		}
	});

	return winState;

}

function verticalWin(colNum) {
	/*

		a verticalWin is if playerTurn occupies (0,0), (1,0), (2,0) // (0,1), (1,1), (2,1) // (0,2), (1,2), (2,2)
		forEach(), return win

	 */

	console.log(colNum);


	let nArr = [];

	board.map((val) => {
	  nArr.push(val[colNum]);
	});
	;


	if (nArr.join('') === 'XXX' || nArr.join('') === 'OOO') {
		winState = true;
	}

	return winState;

}

function diagonalWin() {
	/*

		a diagonalWin is if (0,2), (1,1), (2,0) // (0,0), (1,1), (2,2)
		forEach(), return win

	 */

	const tlbrWin = () => {
		const myArray = [];

		board.map((val, index) => {
			myArray.push(val[index]);
	});

		if(myArray.join('') === 'XXX' || myArray.join('') === 'OOO'){
			winState = true;
		}

		return winState;
	}

	const trblWin = () => {
		const myArray = [];

		myArray.push(board[0][2]);
		myArray.push(board[1][1]);
		myArray.push(board[2][0]);

		if(myArray.join('') === 'XXX' || myArray.join('') === 'OOO'){
			winState = true;
		}

		return winState;
	}

	return tlbrWin();
	return trblWin();
}

function checkForWin() {
	/*

		checks if any horizontalWin, verticalWin, and diagonalWin functions return playerTurn win

	 */

	horizontalWin();
	diagonalWin();

	if(winState === true){
		console.log(`${playerTurn} wins`);
		return true;
	}


}

function ticTacToe(row, column) {
  /*

    check if the space is already occupied, if so re-prompt, else place playerTurn, X or O, into the space and change to the nextPlayer

   */
	checkForWin();
	
  if(board[row][column] === 'X' || board[row][column] === 'O') {
  	console.log('Space already occupied');
	  getPrompt();
  } else {
  	if(playerTurn === 'X') {
		  board[row][column] = playerTurn;
		  playerTurn = 'O';
      verticalWin(column);
	  } else {
		  board[row][column] = playerTurn;
      playerTurn = 'X';
		  verticalWin(column);
	  }
  }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(1), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
