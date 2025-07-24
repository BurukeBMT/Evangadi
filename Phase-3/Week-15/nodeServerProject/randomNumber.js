/*
5. Create a module called my "randomNumber".
a. The "randomNumber" module has a function called random(). The random function just returns a random number when it gets executed
b. Execute the function inside the module
c. Save the returned value in a variable and log the variable on the console. Now, run your module on the terminal to see the printed output
d. Export your module so that it is accessible to other module
*/  

// Define the random function
function random() {
  return Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
}
// Execute the function and log the result
const randomValue = random();
console.log(`Random number generated: ${randomValue}`);

// Export the function so it can be accessed by other modules   
module.exports = { random };
