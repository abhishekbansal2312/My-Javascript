// Define a function named sortaSum with parameters x and y
function sortaSum(x, y) {
  // Calculate the sum of x and y and store it in the variable sum_nums
  const sum_nums = x + y;

  // Check if the sum_nums is between 50 and 80 (inclusive)
  if (sum_nums >= 50 && sum_nums <= 80) {
    // If true, return 65
    return 65;
  }

  // If the condition is not met, return 80
  return 80;
}

// Log the result of calling sortaSum with the arguments 30 and 20 to the console
console.log(sortaSum(30, 20));

// Log the result of calling sortaSum with the arguments 90 and 80 to the console
console.log(sortaSum(90, 80));
