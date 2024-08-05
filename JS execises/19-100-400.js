// Define a function named testhundred that takes a parameter x
function testhundred(x) {
  // Return true if the absolute difference between 100 and x is less than or equal to 20,
  // or the absolute difference between 400 and x is less than or equal to 20; otherwise, return false
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

// Log the result of calling the testhundred function with the argument 10 to the console
console.log(testhundred(10));

// Log the result of calling the testhundred function with the argument 90 to the console
console.log(testhundred(90));

// Log the result of calling the testhundred function with the argument 99 to the console
console.log(testhundred(99));

// Log the result of calling the testhundred function with the argument 199 to the console
console.log(testhundred(199));

// Log the result of calling the testhundred function with the argument 200 to the console
console.log(testhundred(200));
