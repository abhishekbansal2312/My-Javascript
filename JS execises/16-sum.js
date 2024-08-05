// Define a function named sumTriple that takes two parameters, x and y
function sumTriple(x, y) {
  // Check if x is equal to y
  if (x == y) {
    // If true, return three times the sum of x and y
    return 3 * (x + y);
  } else {
    // If false, return the sum of x and y
    return x + y;
  }
}

// Log the result of calling the sumTriple function with the arguments 10 and 20 to the console
console.log(sumTriple(10, 20));

// Log the result of calling the sumTriple function with the arguments 10 and 10 to the console
console.log(sumTriple(10, 10));
