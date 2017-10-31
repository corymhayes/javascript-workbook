'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ORIGINAL
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// TESTER
// let stacks = {
//   a: [],
//   b: [1],
//   c: [4, 3, 2]
// };if

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // take the top number of the startstack and move it to the endstack

  let tempStack = stacks[startStack].pop();
  stacks[endStack].push(tempStack);
}

function isLegal(startStack, endStack) {
  // if the top number of the startstack is > the top number of the end stack return false
  // make sure either startStack or endStack is either a,b,c otherwise return false

  const stacksKeys = Object.keys(stacks);

  const correctStackLetterInput = (stackLetter) => {
    let correctInput = false;

    stacksKeys.forEach((stacksLetter) => {
      if(stackLetter === stacksLetter){
        correctInput = true;
      }else{
        return false;
      }
    });

    return correctInput;
  }


  if(correctStackLetterInput(startStack) && correctStackLetterInput(endStack)){
    if(stacks[startStack].length > 0) {
      return stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1];
    } else {
      return true;
    }
  } else {
    return true;
  }
}

function checkForWin() {
  // check if the "c stack" has 4,3,2,1

  if(stacks['c'].join('') === '4321'){
    return true;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    console.log('ILLEGAL MOVE');
  } else {
    movePiece(startStack, endStack);
  }
}


// ORIGINAL
// function getPrompt() {
//   printStacks();
//   rl.question('start stack: ', (startStack) => {
//     rl.question('end stack: ', (endStack) => {
//       towersOfHanoi(startStack, endStack);
//       getPrompt();
//     });
//   });
// }

// TESTER
function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if(!checkForWin()) {
        getPrompt();
      } else {
        rl.question('YOU WIN! Would you like to play again? ', (resetAnswer) => {
          if(resetAnswer === 'y'){
            stacks['a'] = [4, 3, 2, 1];
            stacks['b'] = [];
            stacks['c'] = [];
            getPrompt();
          }
        });
      }
    });
  });
}


getPrompt();


