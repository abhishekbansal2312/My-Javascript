function swapFirstAndLastChar(str) {
  // Ensure the string length is at least 1
  if (str.length < 1) {
    return "String length must be at least 1.";
  }

  // If the string length is 1, return the string as is
  if (str.length === 1) {
    return str;
  }

  // Get the first and last characters
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);

  // Get the middle part of the string
  const middlePart = str.slice(1, -1);

  // Construct the new string by swapping the first and last characters
  const newStr = lastChar + middlePart + firstChar;

  return newStr;
}

// Example usage
const originalString = "example";
const newString = swapFirstAndLastChar(originalString);
console.log(`Original string: ${originalString}`);
console.log(`New string: ${newString}`);
