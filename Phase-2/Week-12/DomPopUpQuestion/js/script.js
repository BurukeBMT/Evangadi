// Question 1: Change Background Color Based on Radio Button Selection

// Add a list of radio buttons to the page, each corresponding to a different color option. When a user selects one of these radio buttons, the background color of the page should change to the chosen color.

// Note: When the user selects "Night mode", the background should change to black with white text. When "Sunny mode" is selected, the background should change to light blue with black text.

// *****************************************

  const themeForm = document.getElementById('themeChoice');
const themeRadios = themeForm.querySelectorAll('input[name="theme"]');

themeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const colors = {
            blue: '#5ab5ff',
            green: '#03c4a1',
            purple: '#c300ff',
            sunny: '#FFEB3B',
            nightmode: '#000'
        };
        document.body.style.backgroundColor = colors[e.target.value];
        document.body.style.color = e.target.value === 'nightmode' ? '#fff' : '#000';
        themeForm.querySelectorAll('label').forEach(label => {
            label.style.color = e.target.value === 'nightmode' ? '#fff' : '#000';
        });
    });
});


// Question 2 : Increase or Decrease Number When Buttons are Clicked

// Create two functions, one for each button, to increase and decrease the value displayed in the middle of the page.
// note: the number shouldn't go below 0 and above 20

// *****************************************

const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const resultDiv = document.getElementById('result');
let count = 0;

plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (count < 20) resultDiv.textContent = ++count;
});

minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (count > 0) resultDiv.textContent = --count;
});

// Question 3 : Simple Form Validation

// Implement form validation for a login form. When the user tries to submit the form with any empty input fields, change the background color of those empty input boxes to pink. If all input fields are filled correctly and the form is submitted, display an alert box with the message "Form submitted."

const loginForm = document.getElementById('form');
const usernameInput = loginForm.querySelector('input[name="user-name"]');
const passwordInput = loginForm.querySelector('input[name="password"]');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameInput.style.backgroundColor = '';
    passwordInput.style.backgroundColor = '';

    let hasError = false;

    if (!usernameInput.value.trim()) {
        usernameInput.style.backgroundColor = 'pink';
        hasError = true;
    }
    if (!passwordInput.value.trim()) {
        passwordInput.style.backgroundColor = 'pink';
        hasError = true;
    }

    if (!hasError) {
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Form submitted';
        successMessage.style.color = document.body.style.color || '#000';
        loginForm.style.display = 'none';
        loginForm.parentNode.insertBefore(successMessage, loginForm);
    }
});