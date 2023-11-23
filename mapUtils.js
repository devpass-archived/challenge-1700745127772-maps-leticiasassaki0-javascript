// Define the sumValues function, which takes a Map object as input and returns the sum of its values
function sumValues(map) {
  // Initialize a variable to hold the sum
  let sum = 0;

  // Iterate over each key-value pair in the Map
  for (const value of map.values()) {
    // Add the value to the sum
    sum += value;
  }

  // Return the sum
  return sum;
}

// Define the multiplyValues function, which takes a Map object as input and returns the product of its values
function multiplyValues(map) {
  // Initialize a variable to hold the product
  let product = 1;

  // Iterate over each key-value pair in the Map
  for (const value of map.values()) {
    // Multiply the value with the product
    product *= value;
  }

  // Return the product
  return product;
}

// Export the sumValues and multiplyValues functions
module.exports = { sumValues, multiplyValues };