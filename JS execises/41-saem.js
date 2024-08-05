// Define a function named three_numbers using function declaration with parameters x, y, and z
function three_numbers(x, y, z) {
  // Check if x, y, and z are equal
  if (x == y && y == z) {
    return 30;
  }

  // Check if at least two of x, y, and z are equal
  if (x == y || y == z || z == x) {
    return 40;
  }

  // Return 20 if none of the conditions are met
  return 20;
}

// Log the result of calling three_numbers with the arguments 8, 8, and 8 to the console
console.log(three_numbers(8, 8, 8));

// Log the result of calling three_numbers with the arguments 8, 8, and 18 to the console
console.log(three_numbers(8, 8, 18));

// Log the result of calling three_numbers with the arguments 8, 7, and 18 to the console
console.log(three_numbers(8, 7, 18));
