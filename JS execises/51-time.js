// Define a function named time_convert with parameter num
function time_convert(num) {
  // Calculate the number of hours by dividing num by 60 and rounding down
  var hours = Math.floor(num / 60);

  // Calculate the remaining minutes by taking the remainder when dividing num by 60
  var minutes = num % 60;

  // Return the result as a string in the format "hours:minutes"
  return hours + ":" + minutes;
}

// Log the result of calling time_convert with different numeric inputs to the console
console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
