/*
Question 1: Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only. 
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

Pseudocode:
1. Define a function that takes an array as input.
2. Create an empty array to store results.
3. For each index and value in the array:
   a. If the index is even AND the value is even, add it to the result array.
4. Print the result array.
*/

// Function to get even numbers at even indexes
const getOnlyEvens1 = (arr) => {
    let result = [];
    if (!Array.isArray(arr)|| !arr.every(item => typeof item === 'number')) {
        return "Please provide an array.";
    }
    for (let i = 0; i < arr.length; i=i+2) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Test cases
//console.log(getOnlyEvens1([1, 2, 3, 6, 4, 8])); // [4]
//console.log(getOnlyEvens1([0, 1, 2, 3, 4]));     // [0, 2, 4]


//Alternative function using filter method
const getOnlyEvens2 = (arr) => {
  let result = arr.filter((num, index) => index % 2 === 0 && num % 2 === 0);
  return result;
}
// Test cases
//console.log(getOnlyEvens2([1, 2, 3, 6, 4, 8])); // prints [4]
//console.log(getOnlyEvens2([0, 1, 2, 3, 4]));    // prints [0, 2, 4]


/*
Question 2: Create a function that takes a two-digit number as a parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not Ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

Pseudocode:
1. Define a function that takes a two-digit number.
2. Check if the input is a valid two-digit number.
3. Reverse the digits of the number.
4. Compare the original and reversed numbers.
5. Print "Ok" if original > reversed, else print "Not ok".
*/

const reverseCompare = (num) => {
    // Check if input is a valid two-digit number (including negatives)
    if (typeof num !== 'number' || (Math.abs(num) < 10 || Math.abs(num) > 99)) {
        return "Input is not a valid two-digit number.";
    }
    const reversedDigits = Math.abs(num).toString().split('').reverse().join('');
    let reversed = parseInt(reversedDigits, 10);

    if (num < 0) reversed *= -1;
    // Compare and print result
    if (num > reversed) return "Ok";
    else return "Not ok";
};

// Test cases
// console.log(reverseCompare(72)); // Ok
// console.log(reverseCompare(23)); // Not ok
// console.log(reverseCompare(21)); // Ok
// console.log(reverseCompare(12)); // Not ok
// console.log(reverseCompare(-21));// Not Ok 
// console.log(reverseCompare(-12));// Ok 
// console.log(reverseCompare(5));  // Input is not a valid two-digit number.


/*
Question 3: Write a function that takes a positive integer and returns the factorial of the number. Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of any positive integer x is x * (x- 1) * (x- 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1

Pseudocode:
1. Define a function that takes a non-negative integer.
2. If the number is 0, return 1.
3. Initialize a result variable to 1.
4. Multiply result by each integer from 1 up to the number.
5. Return the result.
*/
//factorial function using recursion
const factorial= (n) =>{
  if (n < 0) return "Input must be a non-negative integer.";
  else if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Test cases
// console.log(factorial(5)); // 120
// console.log(factorial(6)); // 720
// console.log(factorial(0)); // 1

//factorial function using iteration
const returnFactorial = (n) => {
    if (typeof n !== 'number' || n < 0) return "Input must be a non-negative integer.";

    if (n === 0 || n === 1 ) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Test cases
// console.log(returnFactorial(5)); // 120
// console.log(returnFactorial(6)); // 720
// console.log(returnFactorial(0)); // 1


/*
Question 4 (Meera array): A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array. So [3, 5,-2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints "I am NOT a Meera array"
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 * 2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 3: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3 *2 is -6

Pseudocode:
1. Define a function that takes an array.
2. For each element n in the array:
   a. If n*2 is also in the array, print "I am NOT a Meera array" and return.
3. If no such pair is found, print "I am a Meera array".
*/

const checkMeera = (arr) => {
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
        console.log("Please provide an array.");
        return;
    }
    // Validate all elements are numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] * 2)) {
            return "I am NOT a Meera array";
        }
    }
    return "I am a Meera array";
};

// Test cases
// console.log(checkMeera([10, 4, 0, 5])); // NOT a Meera array
// console.log(checkMeera([7, 4, 9]));     // Meera array
// console.log(checkMeera([1, -6, 4, -3])); // NOT a Meera array
// console.log(checkMeera([1, 'a', 3]));   // All elements in the array must be numbers.


/*
Question 5 (Dual array): Define a Dual array to be an array where every value occurs exactly twice. For example, {1, 2, 1, 3, 3, 2} is a dual array. The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two times) Write a function named isDual that returns 1 if its array argument is a Dual array. Otherwise it returns 0.

Pseudocode:
1. Define a function that takes an array.
2. If the array length is not even, return 0.
3. For each unique value in the array:
   a. Count its occurrences.
   b. If any value does not occur exactly twice, return 0.
4. If all values occur exactly twice, return 1.
*/
const isDual = (arr) => {
    if (!Array.isArray(arr) || arr.length % 2 !== 0) return 0;
    let count = {};
    for (let val of arr) {
        count[val] = (count[val] || 0) + 1;
    }
    for (let key in count) {
        if (count[key] !== 2) return 0;
    }
    return 1;
};

// Test cases
//console.log(isDual([-1, 2, -1, 3, 3, 2])); // 1
// console.log(isDual([2, 5, 2, 5, 5]));    // 0
// console.log(isDual([3, 1, 1, 2, 2]));    // 0


/*
Question 6: Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

Pseudocode:
1. Define a function that takes seconds as input.
2. Validate that the input is a non-negative number.
3. If seconds is negative, return an error message.
4. Ensure it's within 24 hours using modulo
5. Calculate hours = (seconds / 3600) % 24
6. Calculate minutes = (seconds % 3600) / 60
7. Calculate seconds = seconds % 60
8. Format hours, minutes, and seconds as two digits.
9. Return the formatted string "HH:MM:SS"
*/

const digitalClock = (seconds) => {

    if (typeof seconds !== 'number' || seconds < 0) {
        return "Please provide a valid number of seconds.";
    }
    seconds = seconds % (24 * 3600);  // Normalize seconds to a 24-hour format

    let hours = Math.floor(seconds / 3600) % 24;
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Test cases
console.log(digitalClock(5025));   // 01:23:45
console.log(digitalClock(61201));  // 17:00:01
console.log(digitalClock(87000));  // 00:10:00












function Clock(seconds) {

     if (typeof seconds !== 'number' || seconds < 0) {
        return "Please provide a valid number of seconds.";
    }
    // Ensure it's within 24 hours using modulo
    seconds = seconds % (24 * 3600);  // Normalize seconds to a 24-hour format

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Format to always have 2 digits
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(secs).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}