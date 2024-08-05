// Define a function named max_of_three that takes three parameters: x, y, and z
function max_of_three(x, y, z) {
  // Initialize a variable max_val with the value 0
  let max_val = 0;

  // Check if x is greater than y
  if (x > y) {
    // If true, assign the value of x to max_val
    max_val = x;
  } else {
    // If false, assign the value of y to max_val
    max_val = y;
  }

  // Check if z is greater than max_val
  if (z > max_val) {
    // If true, update max_val to the value of z
    max_val = z;
  }

  // Return the final value of max_val
  return max_val;
}

// Log the result of calling max_of_three with the arguments 1, 0, 1 to the console
console.log(max_of_three(1, 0, 1));

// Log the result of calling max_of_three with the arguments 0, -10, -20 to the console
console.log(max_of_three(0, -10, -20));

// Log the result of calling max_of_three with the arguments 1000, 510, 440 to the console
console.log(max_of_three(1000, 510, 440));
