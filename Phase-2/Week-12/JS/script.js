/*
Question 1: The following three questions are based on the two paragraphs under the section which says "For Question 1" in the index.html file.

1.1 Select the element with an id of "sample1".
1.2 Print the element itself on the console upon page refresh. 
1.3 Print the content of the element on the console upon page refresh.

Hint: Use the "textContent" property to select the content
*/

item=document.getElementById("sample1")
console.log(item);
console.log(item.textContent);
//console.log(item.innerHTML);

/*
Question 2: The following questions are based on the HTML code found under the section labeled "For question 2". 

2.1 Select the element with an ID of "techCompanies" and display it on your console. (Do not use "querySelector" for this question)

2.2 Use "querySelector" to select the element with an ID of "techCompanies" and display it on your console.

2.3 How many tech companies are listed under the ul element with an id of "techCompanies"? Use "querySelectorAll" to count the total.

2.4 Select all elements with a class name of "red" and display them on the console. Use both "querySelectorAll" and "getElementByClass" 

2.5 Create a new li HTML element with a content of "Facebook" and display it on console 

2.6 Give the newly created element a class of "blue" using JavaScript 

2.7 Append the newly created element next to the the "Sony" li element

2.8 How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

 */

let techc= document.getElementById("techCompanies")
console.log(techc);

techco=document.querySelector("#techCompanies ")
console.log(techco);

tech=document.querySelectorAll("#techCompanies li")
console.log(tech.length);

let red=document.querySelectorAll(".red");
console.log(red);

let newCompany = document.createElement("li");
newCompany.textContent = "Facebook";
// console.log(newCompany);

newCompany.classList.add("blue");
console.log(newCompany);

let sonyElement = document.querySelector("#techCompanies li:last-child");
sonyElement.insertAdjacentElement("afterend", newCompany); 

let blueCompanies = document.querySelectorAll(".blue");
let blueCompaniesCount = blueCompanies.length;
document.getElementById("blueCompanies").textContent = `There are ${blueCompaniesCount} companies colored blue.`;

/*
Question 3: Change the background color of the page to light-blue (#99ecff) when clicked on the text that says "Yes". If there is a background color set already, change it to none when clicked on "No"

Hint: First, write two functions to alter the backgroundColor of the page. One to add a background  color,  another  to  remove.  Then,  select  the  "yesBackground"  or "noBackground"  element  and  bind  the selected element with the click event. Finally, attach the function you wrote to alter the background color when the respective element is clicked on.
*/

function addBackgroundColor() {
    document.body.style.backgroundColor = "#99ecff";
}

function removeBackgroundColor() {
    document.body.style.backgroundColor = "";
}

let yesButton = document.getElementById("yesBackground");
let noButton = document.getElementById("noBackground");

yesButton.addEventListener("click", addBackgroundColor);
noButton.addEventListener("click", removeBackgroundColor);

/*
Question 4: A form with two text fields is provided under the section which says "For question 4". Write a JavaScript code which takes the values of the two fields, checks if they are number values and calculate the sum of the two numbers. 
1. Display the result on the console 
2. Display the result underneath the form 
3. If any of the numbers provided is not a number, display a message that says 

"Please enter numerical values only" underneath the form
*/

function calculateSum(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the values from the form fields
  let firstValue = document.querySelector('input[name="first-value"]').value;
  let secondValue = document.querySelector('input[name="second-value"]').value;

  // Convert the values to numbers
  let num1 = parseFloat(firstValue);
  let num2 = parseFloat(secondValue);

  // Select the result div
  let resultDiv = document.getElementById("sum");

  // Check if both values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter numerical values only"; // Display error message
    console.log("Please enter numerical values only");
  } else {
    // Calculate the sum
    let sum = num1 + num2;
    
    // Display the result on the console
    console.log("The sum is:", sum);

    // Display the result under the form
    resultDiv.textContent = `The sum is: ${sum}`;
  }
}

// Select the form and attach the event listener
let form = document.getElementById("adder");
form.addEventListener("submit", calculateSum);

