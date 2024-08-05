// Define a function named diff_num that takes a parameter n
function diff_num(n) {
  // Check if n is less than or equal to 19
  if (n <= 19) {
    // If true, return the difference between 19 and n
    return 19 - n;
  } else {
    // If false, return three times the difference between n and 19
    return (n - 19) * 3;
  }
}

// Log the result of calling the diff_num function with the argument 12 to the console
console.log(diff_num(12));

// Log the result of calling the diff_num function with the argument 19 to the console
console.log(diff_num(19));

// Log the result of calling the diff_num function with the argument 22 to the console
console.log(diff_num(22));
