// randomNumber.js

// Define the random function
function random() {
  return Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
}

// Execute the function and log the result
const randomValue = random();
console.log(`Random number generated: ${randomValue}`);

// Export the function so it can be accessed by other modules
module.exports = { random };
