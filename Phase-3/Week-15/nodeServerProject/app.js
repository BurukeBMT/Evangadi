const express = require('express');
const path = require('path');
const { random } = require('./randomNumber');

const app = express();
const PORT = 1234;

// Serve static files from "static" folder
app.use(express.static(path.join(__dirname, 'static')));

// Root route → send random number
app.get('/', (req, res) => {
  res.send(`Request received and processed<br>Random Number: ${random()}`);
});

// About route → serve about.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/apple-html-css-replica/about.html'));
});

// Fallback for 404s
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});





// const express = require("express");

// const app = express();
// app.listen(1234, (err) => {
//   if (err) {
//     console.log("Error found" + err);
//   }
//   console.log("Server running");
// });
// app.get("/", (req, res) => {
//   ;
//   res.send("<h1>Request received and processed</h1>");
// })



// const randomNumber = require("./randomNumber");
// app.get("/", (req, res) => {
//   const randomValue = randomNumber.random();
//   res.send(`Random number generated: ${randomValue}`);

// });


// app.use(express.static("static/apple-html-css-replica"));