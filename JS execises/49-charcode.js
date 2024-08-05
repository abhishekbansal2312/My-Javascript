// Define a function named LetterChanges with parameter text
function LetterChanges(text) {
  // Initialize an array by splitting the input text into individual characters
  var s = text.split("");

  // Iterate through each character in the array
  for (var i = 0; i < s.length; i++) {
    // Caesar cipher: Shift each character by one position in the alphabet
    switch (s[i]) {
      case " ":
        break;
      case "z":
        s[i] = "a";
        break;
      case "Z":
        s[i] = "A";
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
    }

    // Convert vowels to uppercase
    switch (s[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        s[i] = s[i].toUpperCase();
    }
  }

  // Join the modified characters back into a string and return the result
  return s.join("");
}

// Log the result of calling LetterChanges with the argument "PYTHON" to the console
console.log(LetterChanges("PYTHON"));

// Log the result of calling LetterChanges with the argument "W3R" to the console
console.log(LetterChanges("W3R"));

// Log the result of calling LetterChanges with the argument "php" to the console
console.log(LetterChanges("php"));
