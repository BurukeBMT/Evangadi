/*
3. Create another module called "myCollector":
a. Import both functions from "myFirst" and "mySecond" modules inside of your "myCollector" module
b. Pass the value 5 to both functions that are imported from "myFirst" and "mySecond" modules
c. Run the "myCollector" module on your terminal to display the outputs on your console
*/
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

/*
4. While you are in your "myCollector" module:
a. Write a script inside of your "myCollector" module that passes the number 14 to your "myMultiplier" function that you imported from "myFirst" module and writes the returned value on a file called "results.txt". The result you write on the file should read like this: "The value of 14 when passed through the myMultiplier function is ( )."
■ Hint: You will need to find the core Node module that will allow you to create the “results.txt" file and write the result on this file

b. Write another script inside of your "myCollector" module that passes the number 14 to your "myMultiplier" function that you imported from "mySecond" module and writes the returning value on the same file, the "results.txt" on a new line. The result you write on the file should read like this:
"The value of 14 when passed through the myMultiplier function is ( )”.
■ Note: Make sure not to replace/remove what you wrote on your "results.txt" file previously.
■ Note: Also, make sure to add the new result on a new line, right below the result written previously.
 */

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
