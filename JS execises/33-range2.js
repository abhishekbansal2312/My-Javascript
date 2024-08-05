// Define a function named numbers_ranges with parameters x and y
function numbers_ranges(x, y) {
  // Check if x and y fall within the first range (40 to 60) or the second range (70 to 100)
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    // Return true if the conditions are met
    return true;
  } else {
    // Return false if the conditions are not met
    return false;
  }
}

// Log the result of calling numbers_ranges with the arguments 44 and 56 to the console
console.log(numbers_ranges(44, 56));

// Log the result of calling numbers_ranges with the arguments 70 and 95 to the console
console.log(numbers_ranges(70, 95));

// Log the result of calling numbers_ranges with the arguments 50 and 89 to the console
console.log(numbers_ranges(50, 89));
