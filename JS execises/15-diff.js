// Define a function named difference that takes a parameter n
function difference(n) {
  // Check if n is less than or equal to 13
  if (n <= 13) {
    // If true, return the difference between 13 and n
    return 13 - n;
  } else {
    // If false, return the double of the difference between n and 13
    return (n - 13) * 2;
  }
}

// Log the result of calling the difference function with the argument 32 to the console
console.log(difference(32));

// Log the result of calling the difference function with the argument 11 to the console
console.log(difference(11));
