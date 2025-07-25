/*
6. Create "myWebServer" module
a. Inside of your myWebServer module, create a web server which listens to requests on port 1234
■ Note: It is a good practice to write a custom message such as console.log(“Server running”) in your server listener you create to check if your server is running and listening to requests
b. Run your "myWebServer" module on your terminal to check if your server is listening to requests at port 1234
c. Inside of your "myWebServer" module, write your request listener function as a callback inside of the server you created above. This function should return the following text message "Request received and processed" to the browser.
d. Run your "myWebServer" module on your terminal and go to your browser and type “localhost:1234” to check if your browser displays the "Request received and processed " message sent from your server
*/

// Import the http module to create a server

const http = require('http');

// Create the server and define a callback for handling incoming requests
const server = http.createServer((req, res) => {
  // Set the HTTP response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response text to the client (browser)
  res.end('Request received and processed');
});

server.listen(1234, function () {
  console.log("Server running on port 1234"); // Log message to confirm the server is running
});

/*
7. Inside your "myWebServer" module
a. Import your "randomNumber" module inside of your "myWebServer" module. Now, generate a random number using the random() function from the "randomNumber" module and return the generated random number to the client browser when request is sent to port 1234.
■ Don’t forget to run your module on your terminal to keep your server running and
■ Go to your browser and type “localhost:1234” to see the random number generated
*/ 

// // Import the randomNumber module
// const randomNumber = require('./randomNumber');

// // Create the server
// const server = http.createServer((req, res) => {
//   // Generate a random number using the random function from the randomNumber module
//   const randomValue = randomNumber.random();

//   // Set the HTTP response headers
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send the random number as the response to the client (browser)
//   res.end(`Random number generated: ${randomValue}`);
// });
// // Make the server listen on port 1234
// server.listen(1234, () => {
//   console.log('Server running on port 1234');
// });

/*
 8. Create a new folder called "static"
a. Inside the "static" folder, save the “apple html css replica” folder by downloading and extracting it
b. Add a sample "about.html" page inside of your “apple html css replica” folder you just downloaded. Open your "about.html” file and add the text ‘This is coming from my "about page ” ’
c. Modify your request listener function in a way it would serve the "about.html" page when users request it on the browser
■ Hint: You will need to import additional node modules to display your “about.html” page when users request it on the browser
d. Don’t forget to run your module on your terminal to keep your server running. Now, go to your browser and type “localhost:1234” to see the ‘This is coming from my "about page ” ’ text sent to your browser
e. Now, modify your listener function in a way that it serves any of the pages inside of your "static" folder when requested
*/

// const fs = require("fs");
// const path = require('path');
// // Install mime-types to get access called lookup
// const mimetypelookup = require("mime-types").lookup;

// // Create the Server Object
// const server = http.createServer(function (req, res) {

// filePath = req.url
//   if (filePath =="/" ){
//     filePath = "/index.html";
//   }
//     var requestedFile = path.join(__dirname + "/static/apple-html-css-replica/", filePath);
    
//     const readFile = fs.readFile(requestedFile, function (err, content) {
//       if (err) {
//          res.writeHead(404, { "Content-Type": "text/html" });
//          res.end("<h1>404 Not Found</h1>");;
        
//       } else {
//         let mime = mimetypelookup(filePath);
//         res.writeHead(200, { "content-type": mime });
//         res.end(content);
//       }
//     });
// });
// server.listen(1234, () => {
//   console.log('Server running on port 1234');
// });

// const fs = require('fs');
// const path = require('path');

// // Create the HTTP server
// const server = http.createServer(function (req, res) {
//   // Only serve about.html for / or /about.html
//   if (req.url === '/' || req.url === '/index.html') {
//     const filePath = path.join(__dirname , '/static/apple-html-css-replica/', 'index.html');

//     fs.readFile(filePath, function (err, content) {
//       if (err) {
//         // File read failed
//         res.writeHead(500, { 'Content-Type': 'text/html' });
//         res.end('<h1>500 Internal Server Error</h1>');
//       } else {
//         // Serve about.html
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//       }
//     });
//   } else {
//     // Any other URL returns 404
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>404 Not Found</h1>');
//   }
// });

// // Start the server
// server.listen(1234, () => {
//   console.log('Server running on port 1234');
// });
