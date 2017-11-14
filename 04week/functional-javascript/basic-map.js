/*
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}
*/





function doubleAll(numbers) {
  // SOLUTION GOES HERE
  let result = [];

  numbers.map((item) => {
    result.push(item * 2);
  });

  return result;
}

module.exports = doubleAll
