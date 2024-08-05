// Define a function named lessby20_others with parameters x, y, and z
function lessby20_others(x, y, z) {
  // Check if x is greater than or equal to 20 and (x is less than y or x is less than z)
  // Check if y is greater than or equal to 20 and (y is less than x or y is less than z)
  // Check if z is greater than or equal to 20 and (z is less than y or z is less than x)
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}

// Log the result of calling lessby20_others with the arguments 23, 45, and 10 to the console
console.log(lessby20_others(23, 45, 10));

// Log the result of calling lessby20_others with the arguments 23, 23, and 10 to the console
console.log(lessby20_others(23, 23, 10));

// Log the result of calling lessby20_others with the arguments 21, 66, and 75 to the console
console.log(lessby20_others(21, 66, 75));
