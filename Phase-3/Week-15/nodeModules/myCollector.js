// myCollector.js

// Import the myMultiplier function from myFirst.js
const myFirst = require("./myFirst");

// Import the myMultiplier function from mySecond.js
const mySecond = require("./mySecond");

// Call both functions with the number 5
const resultFirst = myFirst.myMultiplier(5); // From myFirst.js (2x multiplier)
const resultSecond = mySecond.myMultiplier(5); // From mySecond.js (3x multiplier)

// Log the results to the console
console.log(`Result from myFirst (5 * 2): ${resultFirst}`); // Output: 10
console.log(`Result from mySecond (5 * 3): ${resultSecond}`); // Output: 15

// for q 4

// Import the built-in 'fs' module to handle file operations
const fs = require('fs');

// Pass 14 to myMultiplier from myFirst
const result = myFirst.myMultiplier(14);

// Prepare the text to write to the file
const text = `The value of 14 when passed through the myMultiplier function is (${result}).\n`;

// Write the result to "results.txt"
fs.writeFileSync('results.txt', text, 'utf8');

// Pass 14 to mySecond.myMultiplier and append the result to "results.txt"
const result2 = mySecond.myMultiplier(14);
const textSecond = `The value of 14 when passed through the myMultiplier function from mySecond is (${result2}).\n`;
fs.appendFileSync('results.txt', textSecond, 'utf8');  // Appends the result to the file
