// Define a function named test_number with parameters x and y
function test_number(x, y) {
  // Return true if x is equal to 15, y is equal to 15, the sum of x and y is equal to 15,
  // or the absolute difference between x and y is equal to 15; otherwise, return false.
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}

// Log the result of calling test_number with the arguments 15 and 9 to the console
console.log(test_number(15, 9));

// Log the result of calling test_number with the arguments 25 and 15 to the console
console.log(test_number(25, 15));

// Log the result of calling test_number with the arguments 7 and 8 to the console
console.log(test_number(7, 8));

// Log the result of calling test_number with the arguments 25 and 10 to the console
console.log(test_number(25, 10));

// Log the result of calling test_number with the arguments 5 and 9 to the console
console.log(test_number(5, 9));

// Log the result of calling test_number with the arguments 7 and 9 to the console
console.log(test_number(7, 9));

// Log the result of calling test_number with the arguments 9 and 25 to the console
console.log(test_number(9, 25));
