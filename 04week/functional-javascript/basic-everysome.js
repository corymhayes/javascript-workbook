function checkUsersValid(goodUsers) {
  goodUsers.some(item => {
    console.log(item);
  });
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
  };
}


const goodUsersObj = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

console.log(checkUsersValid(goodUsersObj));

// module.exports = checkUsersValid
