// Use a for loop to console.log each item in the array carsInReverse.
let i = 0;

const carsInReverse = ["ford", "tesla", "subaru", "jeep"];

for(i; i < carsInReverse.length; i+=1){
  console.log(carsInReverse[i]);
}

/*

for...in loop
Create an object (an array with keys and values) called persons with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
Use a for...in loop to console.log each key.
Then use a for...in loop and if state to console.log the value associated with the key birthDate.

*/
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}


for(const val in persons){
  console.log(persons[val]);
}



// Use a for loop to console.log the numbers 1 to 1000.
i = 0;
while(i <= 1000){
  console.log(i);
  i++;
}


//Use a do...while loop to console.log the numbers from 1 to 1000.
i = 0;
do{
  console.log(i);
  i++;
} while (i <= 1000);