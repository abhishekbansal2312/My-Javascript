// Define a function named check_char with parameters str1 (a string) and char (a character)
function check_char(str1, char) {
  // Initialize a counter variable to 0
  let ctr = 0;

  // Use a for loop to iterate through each character in the string
  for (let i = 0; i < str1.length; i++) {
    // Check if the current character is equal to the specified char and if the index is between 1 and 3 (inclusive)
    if (str1.charAt(i) == char && i >= 1 && i <= 3) {
      // Set the counter to 1 and break out of the loop
      ctr = 1;
      break;
    }
  }

  // Check if the counter is 1 and return true, otherwise return false
  if (ctr == 1) return true;
  return false;
}

// Log the result of calling check_char with the arguments "Python" and "y" to the console
console.log(check_char("Python", "y"));

// Log the result of calling check_char with the arguments "JavaScript" and "a" to the console
console.log(check_char("JavaScript", "a"));

// Log the result of calling check_char with the arguments "Console" and "o" to the console
console.log(check_char("Console", "o"));

// Log the result of calling check_char with the arguments "Console" and "C" to the console
console.log(check_char("Console", "C"));

// Log the result of calling check_char with the arguments "Console" and "e" to the console
console.log(check_char("Console", "e"));

// Log the result of calling check_char with the arguments "JavaScript" and "S" to the console
console.log(check_char("JavaScript", "S"));
