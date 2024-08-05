// Define a function named vowel_Count with parameter str
function vowel_Count(str) {
  return str.replace(/[^aeiouAEIOU]/g, "").length;
}

// Log the result of calling vowel_Count with the given strings to the console
console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
