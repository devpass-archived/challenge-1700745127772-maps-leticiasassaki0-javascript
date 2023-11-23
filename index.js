// Import the mapUtils module
const { sumValues, multiplyValues } = require('./mapUtils');

// Create a new Map object
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

// Call the sumValues function with myMap and store the result in the sum variable
const sum = sumValues(myMap);

// Print the sum
console.log('Sum:', sum);

// Call the multiplyValues function with myMap and store the result in the product variable
const product = multiplyValues(myMap);

// Print the product
console.log('Product:', product);