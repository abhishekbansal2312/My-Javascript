// Import the express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define the port number
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// Define a route handler for the default home page
app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  
  //   res.send("About page");
});

app.get("/aboutme", (req, res) => {
  res.redirect("/about");
});
// redirect page is used to redirect the page from one url to another
app.use((req, res) => {
  res.send("errorpage");
});
