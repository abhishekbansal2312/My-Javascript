// Define a function named positive_negative that takes two parameters, x and y
function positive_negative(x, y) {
  // Check if either x is negative and y is positive, or x is positive and y is negative
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    // If true, return true
    return true;
  } else {
    // If false, return false
    return false;
  }
}

// Log the result of calling the positive_negative function with the arguments 2 and 2 to the console
console.log(positive_negative(2, 2));

// Log the result of calling the positive_negative function with the arguments -2 and 2 to the console
console.log(positive_negative(-2, 2));

// Log the result of calling the positive_negative function with the arguments 2 and -2 to the console
console.log(positive_negative(2, -2));

// Log the result of calling the positive_negative function with the arguments -2 and -2 to the console
console.log(positive_negative(-2, -2));
