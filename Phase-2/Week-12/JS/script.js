/*
Question 1: The following three questions are based on the two paragraphs under the section which says "For Question 1" in the index.html file.

1.1 Select the element with an id of "sample1".
1.2 Print the element itself on the console upon page refresh. 
1.3 Print the content of the element on the console upon page refresh.

Hint: Use the "textContent" property to select the content
*/

const sample1Element = document.getElementById("sample1");
console.log(sample1Element); // Display the element
console.log(sample1Element.textContent); // Display its content

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

// 2.1 Select by ID and display
const techCompaniesList = document.getElementById("techCompanies");
console.log(techCompaniesList);

// 2.2 Select by querySelector and display
const techCompaniesListQS = document.querySelector("#techCompanies");
console.log(techCompaniesListQS);

// 2.3 Count li elements
const techCompanyItems = document.querySelectorAll("#techCompanies li");
console.log(techCompanyItems.length);

// 2.4 Select all elements with class 'red'
const redElementsQS = document.querySelectorAll(".red");
console.log(redElementsQS);

const redElementsGEBCN = document.getElementsByClassName("red");
console.log(redElementsGEBCN);

// 2.5 Create new li for Facebook
const facebookLi = document.createElement("li");
facebookLi.textContent = "Facebook";
console.log(facebookLi);

// 2.6 Add class 'blue'
facebookLi.classList.add("blue");
console.log(facebookLi);

// 2.7 Append after Sony
const sonyLi = document.querySelector("#techCompanies li:last-child");
sonyLi.insertAdjacentElement("afterend", facebookLi);

// 2.8 Count blue companies and display in div
const blueCompanies = document.querySelectorAll(".blue");
document.getElementById("blueCompanies").textContent = `There are ${blueCompanies.length} companies colored blue.`;

/*
Question 3: Change the background color of the page to light-blue (#99ecff) when clicked on the text that says "Yes". If there is a background color set already, change it to none when clicked on "No"

Hint: First, write two functions to alter the backgroundColor of the page. One to add a background  color,  another  to  remove.  Then,  select  the  "yesBackground"  or "noBackground"  element  and  bind  the selected element with the click event. Finally, attach the function you wrote to alter the background color when the respective element is clicked on.
*/
function setBackground() {
    document.body.style.backgroundColor = "#99ecff";
}
function clearBackground() {
    document.body.style.backgroundColor = "";
}
document.getElementById("yesBackground").addEventListener("click", setBackground);
document.getElementById("noBackground").addEventListener("click", clearBackground);

/*
Question 4: A form with two text fields is provided under the section which says "For question 4". Write a JavaScript code which takes the values of the two fields, checks if they are number values and calculate the sum of the two numbers. 
1. Display the result on the console 
2. Display the result underneath the form 
3. If any of the numbers provided is not a number, display a message that says 

"Please enter numerical values only" underneath the form
*/

function calculateSum(event) {
    event.preventDefault();
    const val1 = document.querySelector('input[name="first-value"]').value;
    const val2 = document.querySelector('input[name="second-value"]').value;
    console.log(typeof val1, typeof val2); // Log types of inputs
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    const resultDiv = document.getElementById("sum");
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter numerical values only";
        console.log("Please enter numerical values only");
    } else {
        const sum = num1 + num2;
        resultDiv.textContent = `The sum is: ${sum}`;
        console.log("The sum is:", sum);
    }
}
document.getElementById("adder").addEventListener("submit", calculateSum);