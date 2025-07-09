/*
Question 1: 
The following three questions are based on the two paragraphs under the section which says, 
"For Question 1". 
1.1.  Select the element with an id of "sample1" using jQuery. 
1.2.  Print the element itself on the console upon page refresh. 
1.3.  Print the content of the element on the console upon page refresh. Use jQuery 
to select the content of the element
*/ 

// 1.1: Select the element
  let sampleElement = $("#sample1");

  // 1.2: Print the element itself
  console.log(sampleElement);

  // 1.3: Print the content of the element
  console.log(sampleElement.html()); // If you want HTML content
  console.log(sampleElement.text()); // If you want plain text content

/*
Question 2: 
The following questions are based on the HTML code found under the section labeled "For 
question 2". 
2.1. Select the element with an ID of "techCompanies" and display it on your console. 
2.2.  How many tech companies are listed under the ul element with an id 
of "techCompanies"? 
2.3. Select all elements with a class of "red" and display them on the console. 
2.4. Create a new li HTML element with a content of "Facebook" and display it on console 
2.5. Give the newly created element a class of "blue" using jQuery 
2.6. Append the newly created element next to the the "Sony" <li> element 
2.7.  How many of the tech companies are labeled blue? Find the result using jQuery and 
display the result inside the "blueCompanies" div.   
*/
let techCompanies = $("#techCompanies");
  console.log(techCompanies);

  // 2.2: Count how many tech companies are listed under the ul with ID techCompanies
  let techCompaniesCount = $("#techCompanies li").length;
  console.log(`Total tech companies: ${techCompaniesCount}`);

  // 2.3: Select all elements with a class of red and display them
  let redCompanies = $(".red");
  console.log(redCompanies);

  // 2.4: Create a new li HTML element with content "Facebook" and display it
  let newCompany = $("<li></li>").text("Facebook");
  console.log(newCompany);

  // 2.5: Give the newly created element a class of blue
  newCompany.addClass("blue");
  console.log(newCompany);

  // 2.6: Append the new element next to the Sony li element
  $("#techCompanies li:contains('Sony')").after(newCompany);

  // 2.7: Count how many companies are labeled blue and display the result
  let blueCompaniesCount = $(".blue").length;
  $("#blueCompanies").text(`There are ${blueCompaniesCount} blue companies.`);


/*
Question 3:
A form with two text fields is provided under the section which says "For question 3". Write a jQuery  code  which  takes  the values of the two fields, checks if they are number values and calculate the sum and average of the two numbers. 
3.1.  Display the result on the console 
3.2.  Display the result underneath the form 
3.3.  If any of the numbers provided is not a number, display a message that says "Please enter numerical values only" underneath the form 
*/
    
    $("#submitButton").click(function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the values from the form fields
      let firstValue = $('input[name="first-value"]').val();
      let secondValue = $('input[name="second-value"]').val();

      // Convert the values to floats
      let num1 = parseFloat(firstValue);
      let num2 = parseFloat(secondValue);

      // Select the result div to display the message
      let resultDiv = $("#sum");

      // Check if both values are numbers
      if (isNaN(num1) || isNaN(num2)) {
        resultDiv.text("Please enter numerical values only");
        console.log("Please enter numerical values only");
      } else {
        // Calculate sum and average
        let sum = num1 + num2;
        let average = sum / 2;

        // Display the results in the console
        console.log("Sum:", sum);
        console.log("Average:", average);

        // Display the results underneath the form
        resultDiv.html(`Sum: ${sum} <br> Average: ${average}`);
      }
    });
  
/* 
Question 4: 
Create  an  HTML  form  which  asks  users  to  provide  their  First  name,  Last name and Email 
address. All the fields should be labeled as required. Once the user submits, write a JavaScript 
function that checks if all the fields are provided. If not, it should show an error message above 
the form. 
 
If the user provides all the values, hide the form input fields, and display all the values provided 
by the user on the browser.
*/

$(document).ready(function () {
  $("#userForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let email = $("#email").val().trim();

    // Select the error message div and the form
    let errorMessage = $("#errorMessage");
    let form = $("#userForm");
    let userData = $("#userData");

    // Regex for only letters (no numbers or special characters)
    let nameRegex = /^[A-Za-z]+$/;

    // Check if all the fields are filled and names are valid
    if (firstName === "" || lastName === "" || email === "") {
      errorMessage.text("All fields are required.").show();
    } else if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      errorMessage.text("First name and Last name must contain only letters.").show();
    } else {
      // Hide the form and the error message
      errorMessage.hide();
      form.hide();

      // Display the user data
      userData.show();
      userData.html(`
        <h3>Thank you for registering!</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email Address:</strong> ${email}</p>
      `);
    }
  });
});