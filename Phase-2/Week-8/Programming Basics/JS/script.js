/*
// Test JS connection
alert("Your JS file is connected!!");

// Question 1: Find out the answers for these by displaying it on the console. You will need to compare the value on the left of the operator with the value on the right. Please note that the answer for each question below should be either True or False.
// A. 24 > 3
console.log(24 > 3); // true   Both are numbers; 24 is greater than 3.
// B. 2 < "12"
console.log(2 < "12"); // true     "12" coerces to number 12; 2 < 12.
// C. 0 == 2
console.log(0 == 2); // false    Both are numbers; 0 does not equal 2.
// D. 2.0 === 2
console.log(2.0 === 2); // true     Strict equality; 2.0 and 2 are same value and type (number).
// E. 2.0 == "2"
console.log(2.0 == "2"); // true     Loose equality; "2" coerces to 2; 2.0 == 2.
// F. 2 < "John"
console.log(2 < "John"); // false    "John" coerces to NaN; NaN comparisons are false.
// G. 2 > "John"
console.log(2 > "John"); // false    "John" coerces to NaN; NaN comparisons are false.
// H. "2" < "2"
console.log("2" < "2"); // false    Lexicographical comparison; "2" equals "2", so not less.
// I. "2" > "12"
console.log("2" > "12"); // true     Lexicographical; "2" > "1" (first characters).
// J. 1 == 1 || 3 == 2 || 3 == 7
console.log(1 == 1 || 3 == 2 || 3 == 7); // true     OR (||); 1 == 1 is true, so entire expression is true.
// K. 1 == 1 && 2 == 2 && 3 == 7
console.log(1 == 1 && 2 == 2 && 3 == 7); // false    AND (&&); 3 == 7 is false, so entire expression is false.
// L. 1 == 1 || 2 == 2 && 3 == 7
console.log(1 == 1 || (2 == 2 && 3 == 7)); // true     AND (&&) has precedence; 2 == 2 && 3 == 7 is false, but 1 == 1 is true, so OR (||) is true.
// M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
); // true  - 1 == true: true (true coerces to 1).  - 0 > true: false (true coerces to 1; 0 > 1). - 1 == true && 0 > true: true && false = false. - "31" > "9": true (lexicographical; "3" > "9").  - 10 > 5: true. - !("2" == "two" || 1 == "1"):  - "2" == "two": false.  - 1 == "1": true ("1" coerces to 1).    - false || true: true.    - !true: false.   - false || true || true || false: true.

// Question 2: Answer the following questions. Make sure to think about each question and try to solve it in your brain before you see the result on the console.

// 2.1 Which expression returns true?   A/ ‘1’ === 1    B/ 1 == 1   C/ 1 === 1    D/ B and C from above
console.log("Q2.1: Which expression returns true?");
console.log("A. '1' === 1:", "1" === 1); // false
console.log("B. 1 == 1:", 1 == 1); // true
console.log("C. 1 === 1:", 1 === 1); // true
console.log("Answer: D (B and C)"); //

// 2.2 What is the value of x in this statement?    let x = (1 == true);
console.log("Q2.2: let x = (1 == true);");
let x = 1 == true;
console.log("x:", x); // true
console.log("Answer: B (true)"); //  1 == true is true (true coerces to 1); x is true.

// 2.3 What is the value of y from the following statements?    let x = 10;   let y = (x > 5) && (x < 15)
console.log("Q2.3: let x = 10; let y = (x > 5) && (x < 15);");
let x3 = 10;
let y3 = x3 > 5 && x3 < 15;
console.log("y:", y3); // true
console.log("Answer: D (true)"); //  x > 5 is true; x < 15 is true; true && true is true.

// 2.4 What is the value of x from the following statements?    let x = 5;    x += 3;
console.log("Q2.4: let x = 5; x += 3;");
let x4 = 5;
x4 += 3;
console.log("x:", x4); // 8
console.log("Answer: B (8)"); // x += 3 means x = x + 3; 5 + 3 = 8.

// 2.5 What is the value of y from the following statements?    let x = 10;   let y = x++;
console.log("Q2.5: let x = 10; ,let y = x++;");
let x5 = 10;
let y5 = x5++;
console.log("y:", y5); // 10
console.log("Answer: A (10)"); // x++ (post-increment) assigns x’s value (10) to y, then increments x to 11.

// 2.6 What is the value of y in the following statements?    let x = 1;    let y = (x !== 2);
console.log("Q2.6: let x = 1; let y = (x !== 2);");
let x6 = 1;
let y6 = x6 !== 2;
console.log("y:", y6); // true
console.log("Answer: D (true)"); // x !== 2 is true (strict inequality; 1 is not 2).

// 2.7 What is the output of (+”2”+2)?
console.log("Q2.7: (+'2' + 2):", +"2" + 2); // 4
console.log("Answer: 4"); // unary plus +"2" coerces "2" to 2; 2 + 2 = 4.

// 2.8 What is the output of (7 % 3)?
console.log("Q2.8: (7 % 3):", 7 % 3); // 1
console.log("Answer: 1"); // Modulus; 7 ÷ 3 = 2 (quotient), remainder 1.


// 2.9 What is the output of (2+true)?
console.log("Q2.9: (2 + true):", 2 + true); // 3
console.log("Answer: 3"); //3     - true coerces to 1; 2 + 1 = 3.


// Question 3:  Write a simple script that adds 1 and 2 and displays the result on the console   Use variables a, b & c   Use "let" to declare the variables   Use the formula c = a + b  Display the value of c on console
let a = 1;
let b = 2;
let c = a + b;
console.log("Q3: c =", c); // 3
*/

// Question 4: Create a variable to hold your first name  - Create another variable to hold your last name  - Create a third variable to hold your full name  - Assign the value of your first name and last name to the first two variable  - Use "+" to concatenate your first name and last name to assign the result to your last name's variable    - Don't forget to include space between your first and last name    - Display the value of your full name on the console
let firstName = "Biruk";
let lastName = "Maedot";
let fullName = firstName + " " + lastName;
console.log("Q4: Full name = ", fullName); // Biruk Maedot
