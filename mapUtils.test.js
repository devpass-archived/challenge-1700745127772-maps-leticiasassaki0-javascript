const { sumValues, multiplyValues } = require('./mapUtils');

// Test the sumValues function
test('Calculate sum of map values', () => {
  // Create a new Map object
  const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);

  // Call the sumValues function with the myMap and expect the result to be equal to 6
  expect(sumValues(myMap)).toBe(6);
});

// Test the multiplyValues function
test('Calculate product of map values', () => {
  // Create a new Map object
  const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);

  // Call the multiplyValues function with the myMap and expect the result to be equal to 6
  expect(multiplyValues(myMap)).toBe(6);
});