// Define a function named check_numbers that takes two parameters x and y
function check_numbers(x, y) {
  // Check if x or y is in the range between 50 and 99 (inclusive)
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    // If true, return true
    return true;
  } else {
    // If not in the specified range, return false
    return false;
  }
}

// Log the result of calling the check_numbers function with the arguments 12 and 101 to the console
console.log(check_numbers(12, 101));

// Log the result of calling the check_numbers function with the arguments 52 and 80 to the console
console.log(check_numbers(52, 80));

// Log the result of calling the check_numbers function with the arguments 15 and 99 to the console
console.log(check_numbers(15, 99));
s;
