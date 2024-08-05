// Define a function named ab_Check with parameter str
function ab_Check(str) {
  // Use regular expressions to check if the pattern 'a...b' or 'b...a' exists in the given string
  // The test() method returns true if the pattern is found, otherwise, it returns false
  return /a...b/.test(str) || /b...a/.test(str);
}

// Log the result of calling ab_Check with the given strings to the console
console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
