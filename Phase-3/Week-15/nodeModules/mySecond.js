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
