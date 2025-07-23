// Import the http module to create a server

const http = require('http');

// // Create the server and define a callback for handling incoming requests
// const server = http.createServer((req, res) => {
//   // Set the HTTP response headers
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send the response text to the client (browser)
//   res.end('Request received and processed');
// });

// server.listen(1234, function () {
//   console.log("Server running on port 1234"); // Log message to confirm the server is running
// });




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





//  8. Serving static page with http module


const fs = require("fs");
// Install mime-types to get access called lookup
const mimetypelookup = require("mime-types").lookup;

// Create the Server Object
const server = http.createServer(function (req, res) {
  
  
filePath = req.url
  if (filePath =="/" ){
    filePath = "/index.html"
  }
    var requestedFile = __dirname + "/static/apple-html-css-replica/" + filePath;
    
    const readFile = fs.readFile(requestedFile, function (err, content) {
      if (err) {
         res.writeHead(404, { "Content-Type": "text/html" });
         res.end("<h1>404 Not Found</h1>");;
        
      } else {
        let mime = mimetypelookup(filePath);
        res.writeHead(200, { "content-type": mime });
        res.end(content);
      }
    });
  
 

});
server.listen(1234, () => {
  console.log('Server running on port 1234');
});


// no               
