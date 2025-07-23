const express = require("express");

const app = express();
app.listen(1234, (err) => {
  if (err) {
    console.log("Error found" + err);
  }
  console.log("Server running");
});
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