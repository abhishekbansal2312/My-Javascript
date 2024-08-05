// Define a function named check_three_nums that takes three parameters x, y, and z
function check_three_nums(x, y, z) {
  // Check if at least one of the numbers is in the range between 50 and 99 (inclusive)
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

// Log the result of calling the check_three_nums function with the arguments 50, 90, and 99 to the console
console.log(check_three_nums(50, 90, 99));

// Log the result of calling the check_three_nums function with the arguments 5, 9, and 199 to the console
console.log(check_three_nums(5, 9, 199));

// Log the result of calling the check_three_nums function with the arguments 65, 89, and 199 to the console
console.log(check_three_nums(65, 89, 199));

// Log the result of calling the check_three_nums function with the arguments 65, 9, and 199 to the console
console.log(check_three_nums(65, 9, 199));
