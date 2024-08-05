// Define a function named string_reverse with a parameter str
function string_reverse(str) {
  // Split the string into an array of characters, reverse the order, and join them back into a string
  return str.split("").reverse().join("");
}

// Log the result of calling string_reverse with the argument "w3resource" to the console
console.log(string_reverse("w3resource"));

// Log the result of calling string_reverse with the argument "www" to the console
console.log(string_reverse("www"));

// Log the result of calling string_reverse with the argument "JavaScript" to the console
console.log(string_reverse("JavaScript"));
