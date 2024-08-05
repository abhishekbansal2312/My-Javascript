const http = require("http");
const fs = require("fs");

// 1. Create a server
// 2. run the server
// 3. listen for incoming request
// 4. send response

const server = http.createServer((req, res) => {
  //read the file
  //   const filename = "./http-html.html";
  switch (req.url) {
    case "/":
      filename = "./http-html.html";
      res.statusCode = 200;
      break;
    case "/about":
      filename = "./about.html";
      res.statusCode = 200;
      break;
    default:
      filename = "./error404.html";
      req.statusCode = 404;
  }
  fs.readFile(filename, (err, data) => {
    console.log(req.url);
    if (err) {
      res.statusCode = 404;
      console.log(err.message);
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(3010, "localhost", () => {
  console.log("Server is running on port 3010");
});
