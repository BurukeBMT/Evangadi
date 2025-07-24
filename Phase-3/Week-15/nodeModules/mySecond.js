/*
2. Create another module called "mySecond":
a. Add another function in this module with the same name as abov (myMultiplier). This function takes a number as a parameter and returns the value that is 3 times the parameter
b. Execute the function inside the module. Pass the number 4 to the function
c. Save the returned value in a variable and log the variable on the console. Now, run your module on the terminal to see the printed output
d. Export your "myMultiplier" function so that other modules can use it
*/

// mySecond.js

function myMultiplier(num) {
  return num * 3;
}

// Call the function and log the result
const result = myMultiplier(4);
console.log(result); // Output: 12

// Export the function for use in other modules
module.exports = {
myMultiplier,};
