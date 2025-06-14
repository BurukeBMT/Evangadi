// Question 1: Define a simple function named myFirst that prints the word "Hello" on the console. First define the function, then call it.

// 1. Define a function named myFirst with no parameters
// 2. Print "Hello" to the console using console.log
// 3. Call the function to execute it
function myFirst() {
  console.log("Hello");
}
myFirst();

// Question 2: Define a function called mySecond that takes a parameter and prints the parameter on the console.

// 1. Define a function named mySecond with one parameter (param)
// 2. Print the parameter to the console using console.log
function mySecond(param) {
  console.log(param);
}
mySecond("This is my second function.");
// Question 3: Define a function called myThird that takes a parameter and prints it using the mySecond function.

// 1. Define a function named myThird with one parameter (param)
// 2. Call mySecond function, passing param to print it
function myThird(param) {
  mySecond(param);
}
myThird("This is my third function, using mySecond to print.");

// Question 4: Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console.

// 1. Define a function named myFourth with an array parameter (arr)
// 2. Check if the array has at least one element
// 3. If not empty, print the first element using console.log
// 4. If empty, print an error message
function myFourth(arr) {
  if (arr.length > 0) {
    console.log(arr[0]);
  } else {
    console.log("The array is empty");
  }
}
myFourth([1, 2, 3, 4]); // Output: 1
myFourth([]); // Output: The array is empty

// Question 5: Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on the console.

// 1. Define a function named myFifth with an array parameter (arr)
// 2. Validate that the array has exactly two elements and both are numbers
// 3. Calculate the sum of the two numbers
// 4. Print the sum using console.log
// 5. If invalid, print an error message

function myFifth(arr) {
  if (
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    const sum = arr[0] + arr[1];
    console.log(sum);
  } else {
    console.log("The array must contain exactly two numbers.");
  }
}

myFifth([5, 10]); // Output: 15
myFifth([5, "10"]); // Output: The array must contain exactly two numbers.

// Question 6: Write a function that takes an integer minutes and converts it to seconds.

// 1. Define a function named converter with a minutes parameter
// 2. Validate that the input is an integer
// 3. Multiply minutes by 60 to convert to seconds
// 4. Return the result
// 5. If invalid, print an error message

function converter(minutes) {
  if (typeof minutes === "number" && Number.isInteger(minutes)) {
    const second = minutes * 60;
    return second;
  } else {
    return "Please provide a valid integer.";
  }
}
console.log(converter(5)); // Output: 300
console.log(converter(2.5)); // Output: Please provide a valid integer.
console.log(converter("5")); // Output: Please provide a valid integer.

// Question 7: Create a function that takes a number as a parameter, increments the number by +1 and returns the result.

// 1. Define a function named incrementNumber with a number parameter (num)
// 2. Validate that the input is a number
// 3. Add 1 to the number
// 4. Return the result
// 5. If invalid, return an error message
function incrementNumber(num) {
  if (typeof num === "number") {
    return num + 1;
  } else {
    return "Please provide a valid number.";
  }
}

console.log(incrementNumber(5)); // Output: 6
console.log(incrementNumber("5")); // Output: Please provide a valid number.

// Question 8: Write a function that takes the base and height of a triangle and returns its area.

// 1. Define a function named Area with base and height parameters
// 2. Validate that both inputs are numbers
// 3. Calculate the area using 0.5 * base * height
// 4. Return the result
// 5. If invalid, return an error message
function Area(base, height) {
  if (
    typeof base === "number" &&
    typeof height === "number" &&
    base >= 0 &&
    height >= 0
  ) {
    return 0.5 * base * height;
  } else {
    return "Please provide valid numbers for both base and height.";
  }
}

console.log(Area(5, 10)); // Output: 25
console.log(Area("5", 10)); // Output: Please provide valid numbers for both base and height.

// Question 9: Create a function that returns the total number of legs of all the animals (chickens = 2 legs, cows = 4 legs, pigs = 4 legs).

// 1. Define a function named totalLegs with parameters for chickens, cows, and pigs
// 2. Validate that all inputs are numbers
// 3. Calculate total legs: chickens * 2 + cows * 4 + pigs * 4
// 4. Return the total
// 5. If invalid, return an error message
function totalLegs(chickens, cows, pigs) {
  if (
    typeof chickens === "number" &&
    typeof cows === "number" &&
    typeof pigs === "number"
  ) {
    const chickenLegs = chickens * 2;
    const cowLegs = cows * 4;
    const pigLegs = pigs * 4;
    totalLegs = chickenLegs + cowLegs + pigLegs;
    return totalLegs;
  } else {
    return "Please provide valid numbers for all the animals.";
  }
}

console.log(totalLegs(3, 2, 1)); // Output: 20

// Question 10: Create a function that takes an array containing only two numbers as a parameter and returns a value that is 3 times the first element of the array.

// 1. Define a function named tripleFirstElement with an array parameter (arr)
// 2. Validate that the input is an array with exactly two numbers
// 3. Multiply the first element by 3
// 4. Return the result
// 5. If invalid, return an error message

function tripleFirstElement(arr) {
  if (
    Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    return arr[0] * 3;
  } else {
    return "Please provide an array with exactly two numbers.";
  }
}
console.log(tripleFirstElement([2, 5])); // Output: 6

// Question 11: Create a function that returns true when num1 is equal to num2; otherwise return false.

// 1. Define a function named areNumbersEqual with two parameters (num1, num2)
// 2. Compare num1 and num2 using strict equality (===)
// 3. Return true if equal, false otherwise
// 4. If either argument is not a number, return an error message
// 5. If both are numbers, return the comparison result

function areNumbersEqual(num1, num2) {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return "Both arguments must be numbers.";
  }
  return num1 === num2;
}

console.log(areNumbersEqual(5, 5)); // Output: true
console.log(areNumbersEqual(5, 10)); // Output: false

// Question 12: Create a function that takes an integer and returns true if it's divisible by 100, otherwise false.

// 1. Define a function named isDivisibleBy100 with a number parameter (num)
// 2. Validate that the input is an integer
// 3. Check if num is divisible by 100 using modulo operator (%)
// 4. Return true if divisible, false otherwise
// 5. Return false for invalid input

function isDivisibleBy100(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return num % 100 === 0;
  } else {
    return false;
  }
}
console.log(isDivisibleBy100(200)); // Output: true
console.log(isDivisibleBy100(250)); // Output: false

// Question 13: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// 1. Define a function named evenOrOdd with a number parameter (num)
// 2. Validate that the input is an integer
// 3. Check if num is divisible by 2 using modulo operator (%)
// 4. Return "even" if divisible, "odd" otherwise
// 5. Return error message for invalid input

function evenOrOdd(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return num % 2 === 0 ? "even" : "odd";
  } else {
    return "Please provide a valid integer.";
  }
}
console.log(evenOrOdd(4)); // Output: "even"
console.log(evenOrOdd(5)); // Output: "odd"
console.log(evenOrOdd(2.5)); // Output: "Please provide a valid integer."

// Question 14: Create a function that returns "Invalid score" if score is above 100 or negative, "Grade A" for scores between 90 and 100 (inclusive), "Grade B" for scores between 80 and 89 (inclusive), "Grade C" for scores below 79.
// 1. Define a function named getGrade with a score parameter
// 2. Validate that the input is an integer
// 3. Check if score is negative or above 100; return "Invalid score"
// 4. Check if score is >= 90; return "Grade A"
// 5. Check if score is >= 80; return "Grade B"
// 6. Otherwise, return "Grade C"
// 7. Return error message for invalid input

function getGrade(score) {
  if (typeof score === "number") {
    if (score < 0 || score > 100) {
      return "Invalid score";
    } else if (score >= 90) {
      return "Grade A";
    } else if (score >= 80) {
      return "Grade B";
    } else {
      return "Grade C";
    }
  } else {
    return "Please provide a valid integer score.";
  }
}

console.log(getGrade(95)); // Output: "Grade A"
console.log(getGrade(85)); // Output: "Grade B"
console.log(getGrade(75)); // Output: "Grade C"
console.log(getGrade(105)); // Output: "Invalid score"
console.log(getGrade("")); // Output: "Please provide a valid integer score."
console.log(getGrade(-5)); // Output: "Invalid score"

// Additional Code: test function to print every other element of an array

// 1. Define a function named test with an array parameter (arr)
// 2. Validate that the input is an array
// 3. Loop through the array with a step of 2 (i += 2)
// 4. Print each element at index i
function test(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 2) {
      console.log(arr[i]);
    }
  }
}

// Additional Code: evangadiClass object and modifications

// 1. Define an object named evangadiClass with properties and nested students array
// 2. Update lengthOfCourse to "5 month"
// 3. Add "Bootstrap" to the topicsCovered array
// 4. Print the updated object
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    { name: "Abebe", age: 34, sex: "M" },
    { name: "Kebede", age: 44, sex: "M" },
    { name: "Almaz", age: 27, sex: "F" },
    { name: "Challa", age: 22, sex: "M" },
    { name: "Chaltu", age: 19, sex: "F" },
  ],
};
evangadiClass.lengthOfCourse = "5 month";
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

// Additional Code: calculateAverageAge function

// 1. Define a function named calculateAverageAge with an evangadiClass parameter
// 2. Extract the students array from the object
// 3. Check if the students array is not empty
// 4. Calculate the total age using reduce
// 5. Compute the average by dividing total age by number of students
// 6. Print the average age
// 7. If array is empty, print an error message
function calculateAverageAge(evangadiClass) {
  let students = evangadiClass.students;
  if (students.length === 0) {
    console.log("No students to calculate average age.");
    return;
  }
  let totalAge = students.reduce((sum, student) => sum + student.age, 0);
  let averageAge = totalAge / students.length;
  console.log("The average age of the class is:", averageAge);
}

// Additional Code: allprint function

// 1. Define a function named allprint with two parameters (x, y)
// 2. Loop from x to y (exclusive) using a for loop
// 3. Print each number in the range
function allprint(x, y) {
  for (let i = x; i < y; i++) {
    console.log(i);
  }
}
