'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
	//ex. car === arcay

  //global variables
	const wordArray = word.toLowerCase().trim().split('');
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	//take the first letters of the word up to the first vowel
		//firstLetters()
		//comparing the word and vowels arrays to find the first instance of a vowel in the word, indexOf
	const firstLetters = (word) => {
		for(let i = 0; i < wordArray.length; i++){
			for(let j = 0; j < vowels.length; j++){
				if(wordArray[i] === vowels[j]){
					return wordArray.indexOf(wordArray[i]);
				}
			}
		}
	}

  //move them to the back
		//toTheBack()
		//take everything preceding the vowel and put it at the end, splice
	const toTheBackAndAy = () => {
		if(firstLetters() > 0){
			const wordSplice = wordArray.splice(0, firstLetters()).join('');
			wordArray.push(wordSplice + 'ay');
		} else {
			wordArray.push('yay');
		}
		return wordArray.join('');
	}

	return toTheBackAndAy();
	//add 'ay' to the end of it
		//addingAy()
		//add ay to the end of the new string, push

	//putting it back together
		// return join
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
