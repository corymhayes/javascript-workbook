/*

Take the following array of objects and console.log each user and their corresponding data in the following form: "user_name paid amount for product in city, state." using map.

*/


let userArray = [
  {
    "customer": {
      "id": 1,
      "customerName":"Marilyn Monroe",
      "customerCity":"New York City",
      "customerState":"NY",
      "product":"Yellow Chair",
      "productPrice": 19.99
    }
  },

  {
    "customer": {
      "id": 2,
      "customerName":"Abraham Lincoln",
      "customerCity":"Boston",
      "customerState":"MA",
      "product":"Movie Tickets",
      "productPrice": 27.00
    }
  },

  {
    "customer": {
      "id": 3,
      "customerName":"John F. Kennedy",
      "customerCity":"Dallas",
      "customerState":"TX",
      "product":"Mustang Convertible",
      "productPrice": 24999.99
    }
  },

  {
    "customer": {
      "id": 4,
      "customerName":"Martin Luther King",
      "customerCity":"Burmingham",
      "customerState":"AL",
      "product":"Sandwiches",
      "productPrice": 7.99
    }
  },
];

// access chain
// console.log(userArray[0]['customer']['customerName']);

const customers = userArray.map((item) => {

  const userName = item['customer']['customerName'];
  const amount = item['customer']['productPrice'];
  const product = item['customer']['product'];
  const city = item['customer']['customerCity'];
  const state = item['customer']['customerState'];

  console.log(`${userName} paid $${amount} for ${product} in ${city}, ${state}`);
});
