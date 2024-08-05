// Define a function named check8 with parameters x and y
function check8(x, y) {
  // Check if x or y is equal to 8
  if (x == 8 || y == 8) {
    // Return true if the condition is true
    return true;
  }

  // Check if the sum of x and y is equal to 8 or the absolute difference between x and y is equal to 8
  if (x + y == 8 || Math.abs(x - y) == 8) {
    // Return true if the condition is true
    return true;
  }

  // Return false if none of the conditions are met
  return false;
}

// Log the result of calling check8 with the arguments 7 and 8 to the console
console.log(check8(7, 8));

// Log the result of calling check8 with the arguments 16 and 8 to the console
console.log(check8(16, 8));

// Log the result of calling check8 with the arguments 24 and 32 to the console
console.log(check8(24, 32));

// Log the result of calling check8 with the arguments 17 and 18 to the console
console.log(check8(17, 18));
