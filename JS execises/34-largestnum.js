// Define a function named max_townums_range with parameters x and y
function max_townums_range(x, y) {
  // Check if x and y fall within the specified range using logical AND and comparison operators
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    // Check if x and y are the same
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x; // Return x if it is greater than y
    } else {
      return y; // Return y if it is greater than x
    }
  } else {
    return "Numbers don't fit in range"; // Return this message if numbers are outside the range
  }
}

// Log the result of calling max_townums_range with the arguments 45 and 60 to the console
console.log(max_townums_range(45, 60));

// Log the result of calling max_townums_range with the arguments 25 and 60 to the console
console.log(max_townums_range(25, 60));

// Log the result of calling max_townums_range with the arguments 45 and 80 to the console
console.log(max_townums_range(45, 80));
