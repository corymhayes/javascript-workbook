'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
	// get rid of whitespace and convert to lower case before beginning to check
	hand1 = hand1.trim().toLowerCase();
	hand2 = hand2.trim().toLowerCase();

	// only accept rock, paper, or scissors
	if((hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors') &&
		 (hand2 === 'rock' || hand2 === 'paper' || hand2 === 'scissors')){

		// if hand1 is rock
		// and hand2 is scissors, hand1 wins
		// and hand2 is paper, hand2 wins
		// otherwise its a tie
		if(hand1 === 'rock'){
			if(hand2 === 'scissors'){
				console.log("Hand one wins!");
			} else if(hand2 === 'paper'){
				console.log("Hand two wins!");
			} else {
				console.log("It's a tie!");
			}
		}

		// if hand1 is paper
		// and hand2 is rock, hand2 wins
		// and hand2 is scissors, hand1 wins
		// otherwise its a tie
		if(hand1 === 'paper'){
			if(hand2 === 'rock'){
				console.log("Hand one wins!");
			} else if(hand2 === 'scissors'){
				console.log("Hand two wins!");
			} else {
				console.log("It's a tie!");
			}
		}

		// if hand1 is scissors
		// and hand2 is rock, hand2 wins
		// and hand2 is paper, hand1 wins
		// otherwise its a tie
		if(hand1 === 'scissors'){
			if(hand2 === 'rock'){
				console.log("Hand two wins!");
			} else if(hand2 === 'paper'){
				console.log("Hand one wins!");
			} else {
				console.log("It's a tie!");
			}
		}
	} else {
			console.log("Please choose either rock, paper, or scissors.")
		 	getPrompt();
	}
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
