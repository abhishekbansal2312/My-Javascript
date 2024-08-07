const http = require("http");
const fs = require("fs");

// 1. Create a server
// 2. run the server
// 3. listen for incoming request
// 4. send response

const server = http.createServer((req, res) => {
  let filename;
  // req = request, res = response
  // read the file
  // res.setHeader("Content-Type", "application/json"); // set the header of the response to json
  // res.end(JSON.stringify({ name: "Abhishek bansal" })); // send the response as json object with name as Abhishek bansal
  // send the response
  switch (
    req.url // req.url is the path of the request
  ) { 
    case "/":
      filename = "./http-html.html";
      res.statusCode = 200;
      break;
    case "/about":
      filename = "./about.html";
      res.statusCode = 200;
      break;
    case "/aboutme":
      res.statusCode = 301; // 301 is a status code for redirection
      res.setHeader("Location", "/about"); // redirect to /about
      res.end(); // end the response
      return;
    default:
      filename = "./error404.html";
      res.statusCode = 404; // Corrected from req.statusCode to res.statusCode
  }

  fs.readFile(filename, (err, data) => {
    // read the file
    console.log(req.url);
    if (err) {
      res.statusCode = 500; // Internal server error
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal Server Error");
      console.log(err.message);
    } else {
      res.setHeader("Content-Type", "text/html"); // set the header of the response
      res.end(data);
    }
  });
});

server.listen(3010, "localhost", () => {
  // listen for incoming request
  console.log("Server is running on port 3010"); // send response
});
