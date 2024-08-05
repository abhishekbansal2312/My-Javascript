// Define a function named same_last_digit with parameters p, q, and r
function same_last_digit(p, q, r) {
    // Return true if the last digit of p is equal to the last digit of q or r,
    // or if the last digit of q is equal to the last digit of r
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
}

// Log the result of calling same_last_digit with the arguments 22, 32, and 42 to the console
console.log(same_last_digit(22, 32, 42));

// Log the result of calling same_last_digit with the arguments 102, 302, and 2 to the console
console.log(same_last_digit(102, 302, 2));

// Log the result of calling same_last_digit with the arguments 20, 22, and 45 to the console
console.log(same_last_digit(20, 22, 45)); 
