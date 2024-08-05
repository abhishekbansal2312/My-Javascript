// Define a function named upper_lower with parameter str
function upper_lower(str) {
  // Check if the length of str is less than 3
  if (str.length < 3) {
    // If true, return the uppercase version of the entire string
    return str.toUpperCase();
  }

  // Create a variable named front_part and store the lowercase version of the first 3 characters of str
  front_part = str.substring(0, 3).toLowerCase();

  // Create a variable named back_part and store the substring of str from index 3 to the end
  back_part = str.substring(3, str.length);

  // Return the concatenation of front_part and back_part
  return front_part + back_part;
}

// Log the result of calling upper_lower with the argument "Python" to the console
console.log(upper_lower("Python"));

// Log the result of calling upper_lower with the argument "Py" to the console
console.log(upper_lower("Py"));

// Log the result of calling upper_lower with the argument "JAVAScript" to the console
console.log(upper_lower("JAVAScript"));
