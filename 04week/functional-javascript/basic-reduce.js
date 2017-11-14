const myArray = ['Apple', 'Orange', 'Lemon'];

function countWords(inputWords) {

  const newArr = inputWords.reduce((acc, item) => {
	   if(item in acc){
		   acc[item]++;
	  } else {
		acc[item] = 1;
	}

	return acc;
  }, {});

  return newArr;
}

console.log(countWords(myArray));

module.exports = countWords
