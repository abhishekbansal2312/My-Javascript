// Define a function named valCheck with parameters a and b
function valCheck(a, b) {
  // Check if the negation of the condition is true
  if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    // Return true if either a is divisible by 7 or 11, or b is divisible by 7 or 11
    return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
  } else {
    // If the negation of the condition is false, return false
    return false;
  }
}

// Log the result of calling valCheck with the arguments 14 and 21 to the console
console.log(valCheck(14, 21));

// Log the result of calling valCheck with the arguments 14 and 20 to the console
console.log(valCheck(14, 20));

// Log the result of calling valCheck with the arguments 16 and 20 to the console
console.log(valCheck(16, 20));
