// Function to calculate the number of days until Christmas
function daysUntilChristmas() {
  // Get the current date
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  // Set the date for this year's Christmas
  let christmasDate = new Date(currentYear, 11, 25); // December 25th

  // If today is after December 25th, calculate days until next year's Christmas
  if (today > christmasDate) {
    christmasDate = new Date(currentYear + 1, 11, 25);
  }

  // Calculate the difference in time (milliseconds)
  const diffTime = christmasDate - today;

  // Convert the difference from milliseconds to days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Log the number of days left until Christmas
  console.log(`There are ${diffDays} days left until Christmas.`);
}

// Call the function
daysUntilChristmas();
