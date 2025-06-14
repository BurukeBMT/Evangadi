//alert("your JS file is connected!!");
/*
Questions on decision loops
************************
*/
/*
Question 1
● Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.

Pseudocode:
1. Check if the input x is a number.
2. If x is a number:
   a. Start a loop with a counter i from 1 to 10 (inclusive).
   b. For each iteration, print the value of i to the console.
3. If x is not a number, do nothing.
*/

function prints1() {
  for (let i = 1; i <= 10; ++i) {
    console.log(i);
  }
}

function prints2() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

/*
Question 2
● Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.
    Test case: If you give 7 to the function, output should look like this:
            8
            9
            10
            11
            12

Pseudocode:
1. Check if the input x is a number.
2. If x is a number:
   a. Start a loop with a counter i from 1 to 5 (inclusive).
   b. For each iteration, calculate x + i.
   c. Print the result (x + i) to the console, each on a new line.
3. If x is not a number, do nothing.
*/

function printNext51(x) {
  if (typeof x === "number") {
    for (let i = 1; i <= 5; i++) {
      console.log(x + i);
    }
  }
}
function printNext52(x) {
  if (typeof x === "number") {
    let i = 1;
    while (i <= 5) {
      console.log(x + i);
      i++;
    }
  }
}

/*
Question 3
● Write a function that takes a single number and prints the sum of the next 10 numbers after the given number.
○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

Pseudocode:
1. Check if the input x is a number.
2. If x is a number:
   a. Initialize a variable result to 0.
   b. Start a loop with a counter i from 1 to 10 (inclusive).
   c. For each iteration, calculate y = x + i.
   d. Add y to result.
   e. After the loop, print the value of result to the console.
3. If x is not a number, do nothing.
*/

function adder1(x) {
  if (typeof x === "number") {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
      result += x + i;
    }
    return result;
  }
}

function adder2(x) {
  if (typeof x === "number") {
    let result = 0;
    let i = 1;
    while (i <= 10) {
      result += x + i;
      i++;
    }
    return result;
  }
}

/*
Question 4
● Write a function that takes an array as an argument and prints every element of the array on the console.
 ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
 1
 Hello
 8
 44

Pseudocode:
1. Check if the input arr is an array.
2. If arr is an array:
   a. Start a loop with a counter i from 0 to arr.length - 1.
   b. For each iteration, print arr[i] to the console.
3. If arr is not an array, do nothing.
*/

function array1(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

function array2(arr) {
  if (Array.isArray(arr)) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
  }
}

/*
Question 5
● Write a function that takes an array as an argument and prints the total number of elements found in the array. Hint: use a property of the Array object to solve this question.
    ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
    ○ Test case 2: Given the array a = ["world", 13], output should be: 2

Pseudocode:
1. Check if the input arr is an array.
2. If arr is an array:
   a. Print the value of arr.length to the console (number of elements).
3. If arr is not an array, do nothing.
*/

function printArrayLength1(arr) {
  if (Array.isArray(arr)) {
    return arr.length;
  }
}

function printArrayLength2(arr) {
  if (Array.isArray(arr)) {
    let i = 0;
    let count = 0;
    while (i < arr.length) {
      count++;
      i++;
    }
    return count;
  }
}

/*
Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
//  ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
 ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0

Pseudocode:
1. Check if the input arr is an array.
2. If arr is an array:
   a. Initialize a variable sum to 0.
   b. Start a loop with a counter i from 0 to arr.length - 1.
   c. For each iteration:
      i. Check if arr[i] is a number.
      ii. If yes, add arr[i] to sum.
   d. After the loop, print the value of sum to the console.
3. If arr is not an array, do nothing.
*/

function addarr1(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      }
    }
    return sum;
  }
}

//addarr1([5, 6, 99, 8, 76, 4, 68, 44]); // Output: 310

function addarr2(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      }
      i++;
    }
    return sum;
  }
}

/*
Question 7
● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console
○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 102
 ■ Sum of odd numbers: 5 + 99 = 104
 ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
 ■ Difference between total even and total odd numbers: 206 - 104 = 102

Pseudocode:
1. Check if the input arr is an array.
2. If arr is an array:
   a. Initialize two variables: evensum = 0, oddsum = 0.
   b. Start a loop with a counter i from 0 to arr.length - 1.
   c. For each iteration:
      i. Check if arr[i] is a number.
      ii. If arr[i] is even, add to evensum.
      iii. If arr[i] is odd, add to oddsum.
   d. After the loop, subtract oddsum from evensum.
   e. Print the result to the console.
3. If arr is not an array, do nothing.
*/

function total1(arr) {
  if (Array.isArray(arr)) {
    let evensum = 0;
    let oddsum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        if (arr[i] % 2 === 0) {
          evensum += arr[i];
        } else {
          oddsum += arr[i];
        }
      }
    }
    return evensum - oddsum;
  }
}

function total2(arr) {
  if (Array.isArray(arr)) {
    let evensum = 0;
    let oddsum = 0;
    let i = 0;
    while (i < arr.length) {
      if (typeof arr[i] === "number") {
        if (arr[i] % 2 === 0) {
          evensum += arr[i];
        } else {
          oddsum += arr[i];
        }
      }
      i++;
    }
    return evensum - oddsum;
  }
}

/*
Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only. Notice: this question is not asking you to log elements with even value, but elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], output should be:
 5
 99
 76
 68
 ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should be:
 11
 3
 car

Pseudocode:
1. Check if the input arr is an array.
2. If arr is an array:
   a. Start a loop with a counter i from 0 to arr.length - 1, incrementing by 2 (even indexes).
   b. For each iteration, print arr[i] to the console.
3. If arr is not an array, print an error message.
*/

function evenindex1(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 2) {
      console.log(arr[i]);
    }
  } else {
    console.log("Input is not an array");
  }
}

function evenindex2(arr) {
  if (Array.isArray(arr)) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i += 2;
    }
  } else {
    console.log("Input is not an array");
  }
}

/*
Questions on built in JavaScript methods
***********************************
Questions 9 and 10 are dependent on the sampleArray provided below:
	let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
*/
/*
Question 9
● Write a function that takes the sampleArray as a parameter, removes the last element from the array, adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

Pseudocode:
1. Check if the input sampleArray is an array.
2. If sampleArray is an array:
   a. Remove the last element from the array using pop().
   b. Add the value "32" to the end of the array using push().
   c. Print the updated array to the console.
3. If sampleArray is not an array, print an error message.
*/
function updateArray(sampleArray) {
  if (Array.isArray(sampleArray)) {
    sampleArray.pop();
    sampleArray.push("32");
    console.log(sampleArray);
  } else {
    console.log("Please provide a valid array.");
  }
}
// updateArray([5, 6, 99, 8, 76, 4, 68, 44]);
/*
Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console
Use the sort method. Make sure you understand just using the sort() method alphabetically. You should use this sorting syntax -  sort(function(a, b){return a-b});

Pseudocode:
1. Check if the input sampleArray is an array.
2. If sampleArray is an array:
   a. Sort the array in ascending order using sort(function(a, b) { return a - b; }).
   b. Print the sorted array to the console.
3. If sampleArray is not an array, print an error message.
*/
function sortArray(sampleArray) {
  if (Array.isArray(sampleArray)) {
    sampleArray.sort(function (a, b) {
      return a - b;
    });
    console.log(sampleArray);
  } else {
    console.log("Please provide a valid array.");
  }
}

//sortArray([5, 6, 99, 8, 76, 4, 68, 44]);
/*
Questions on JavaScript objects
****************************
The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
*/
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

/*
Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
○ // Use the dot notation "." to call the property you want to change evangadiClass.lengthOfCourse = "5 month";

Pseudocode:
1. Change the lengthOfCourse property of the evangadiClass object to "5 Month" using dot notation.
2. Print the updated object to the console.
*/
evangadiClass.lengthOfCourse = "5 Month";
//console.log(evangadiClass.lengthOfCourse);

/*
Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console
○ // Use an array method

Pseudocode:
1. Add the string "Bootstrap" to the end of the topicsCovered array property of evangadiClass using push().
2. Print the updated object to the console.
*/
evangadiClass.topicsCovered.push("Bootstrap");
//console.log(evangadiClass.topicsCovered);

/*
Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console

Pseudocode:
1. Get the students array from the evangadiClass object.
2. Initialize a variable totalAge to 0.
3. Check if the students array is empty. If yes, print a message and return.
4. Loop through each student in the students array:
   a. Add the student's age to totalAge.
5. Calculate the average age by dividing totalAge by the number of students.
6. Print the total and average age to the console.
*/
function calculateAverageAge(evangadiClass) {
  let totalAge = 0;
  if (evangadiClass.students.length === 0) {
    console.log("No students to calculate average age.");
    return;
  }
  for (let i = 0; i < evangadiClass.students.length; i++) {
    totalAge += evangadiClass.students[i].age;
  }
  let averageAge = totalAge / evangadiClass.students.length;
  console.log("Total age of students:", totalAge);
  console.log("Average age of students:", averageAge);
}

//calculateAverageAge(evangadiClass);

/*
Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the percentage of male students in the class. Print the result on the console

Pseudocode:
1. Get the students array from the evangadiClass object.
2. Check if the students array is empty. If yes, print a message and return.
3. Initialize a variable maleCount to 0.
4. Loop through each student in the students array:
   a. If the student's sex is "M", increment maleCount.
5. Calculate the percentage of male students: (maleCount / total number of students) * 100.
6. Print the percentage to the console, formatted to two decimal places.
*/
function percentageOfMaleStudents(evangadiClass) {
  let stud = evangadiClass.students;
  if (stud.length === 0) {
    console.log("No students in the class.");
    return;
  }
  let maleCount = 0;
  let totalCount = stud.length;
  for (let i = 0; i < totalCount; i++) {
    if (stud[i].sex === "M") {
      maleCount++;
    }
  }
  let malePercent = (maleCount / totalCount) * 100;
  console.log("Percentage of male students:", malePercent.toFixed(2) + "%");
}

//percentageOfMaleStudents(evangadiClass);

/*
Puzzles
*******
*/
/*
Question 15: Test the divisors of three
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

Pseudocode:
1. Start a loop with a counter i from low to high (inclusive).
2. For each value of i:
   a. Set output to i.
   b. Check if i is divisible by 3 (i % 3 === 0).
   c. If yes, append the string "div3" to output.
   d. Print output to the console.
*/
function testDivisorsOfThree(low, high) {
  if (typeof low !== "number" || typeof high !== "number" || low > high) {
    console.log("Please provide valid low and high numbers.");
    return;
  }

  for (let i = low; i <= high; i++) {
    let output = i;
    if (i % 3 === 0) {
      output += " div3";
    }
    console.log(output);
  }
}

//testDivisorsOfThree(1, 20);

/*
Question 16: The famous coding interview question (FizzBuzz) 
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for numbers which are multiples of both three and five print "FizzBuzz".

Pseudocode:
1. define a function fizzBuzz.
2. Start a loop with a counter i from 1 to 100 (inclusive).
3. For each value of i:
   a. If i is divisible by both 3 and 5, print "FizzBuzz".
   b. Else if i is divisible by 3, print "Fizz".
   c. Else if i is divisible by 5, print "Buzz".
   d. Else, print the value of i.
*/
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//fizzBuzz();

/*
Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

Pseudocode:
1. define a function isEvens that takes a number as an argument.
2. Convert the input number to a string.
3. Loop through each character (digit) in the string:
   a. Convert the character back to a number.
   b. Check if the digit is odd (digit % 2 !== 0).
   c. If any digit is odd, print 0 and return.
4. If all digits are even, print 1.
*/
function isEvens(number) {
  let numberStr = number.toString().split("");
  console.log(numberStr);
  for (let i = 0; i < numberStr.length; i++) {
    //let digit = parseInt(numberStr[i], 10);
    if (numberStr[i] % 2 !== 0) {
      console.log(0);
      return;
    }
  }
  console.log(1);
}
isEvens(2426);
isEvens(3224);
