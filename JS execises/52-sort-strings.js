// Define a function named alphabet_Soup with parameter str
function alphabet_Soup(str) {
  // Split the string into an array of characters, sort the array, and join it back into a string
  return str.split("").sort().join("");
}

// Log the result of calling alphabet_Soup with the given strings to the console
console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("Exercises"));
