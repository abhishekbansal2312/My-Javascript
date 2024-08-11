const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const { middleware, middleware1, middleware2 } = require("./middleware");
const morgan = require("morgan");
app.use(middleware1, middleware2);
app.use(middleware.m3, middleware.m4);

// app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const students = [
  "Abbas Akbar",
  "Abhinav Sharma",
  "Abhishek Bansal",
  "Abhishek Srivastava",
  "Aditya Kumar Singh",
  "Ali Sher Khan",
  "Ananya Lamba",
  "Anjali Debnath",
  "Ankit Saini",
  "Anoushka Gautam",
  "Ansh Kumar Gupta",
  "Anshika Bhatnagar",
  "Anuj Chauhan",
  "Anurag Saini",
  "Arin Saxena",
  "Ashish Ansh",
  "Avni Saxena",
  "Divyanshi Vishnoi",
  "Inayat Ullah Khan",
  "Kratika Agarwal",
  "Manish Kumar",
  "Manit Rastogi",
  "Nikita Rathore",
  "Prakhar Sharma",
  "Prakriti Gupta",
  "Pranjal Agarwal",
  "Prince Saxena",
  "Sakshi Chauhan",
  "Samarth Rastogi",
  "Samra Rubab",
  "Sandeep Kumar",
  "Sarthak Rastogi",
  "Shashank Johri",
  "Shashwat Tewari",
  "Shivam Prajapati",
  "Shivi Agarwal",
  "Shrey Singhal",
  "Sohil Ansari",
  "Tahir Ali",
  "Tahzeeb Malik",
  "Tanu Saini",
  "Vishal Kumar",
  "Pratham Gupta",
];
app.set("view engine", "ejs"); // ejs is a templating engine that allows us to write html code in javascript file

app.set("views", "../views"); // views is the folder where we will store our ejs files

//morgan
// static file CSS
app.use(express.static("public")); // public is the folder where we will store our css, images, and js files

//middleware to handle favicon requests
app.use("/favicon.ico", (req, res) => {
  res.sendStatus(204).end();
});
// ]

app.use((req, res, next) => {
  console.log("new Request");
  console.log(req.method, req.url, req.host, req.path);
  next();
});

app.get("/", (req, res) => {
  //   let header = "This is the header of the students page";
  res.render("index", { title: "Home" }); // index is the name of the ejs file that we will create in the views folder
});

app.get("/about", (req, res) => {
  res.render("index", { title: "About" });
});

app.get("/students", (req, res) => {
  res.render("students", { title: "Students", students: students });
});

app.use((req, res) => {
  res.render("error", { title: "404 not found" });
  req.statusCode = 404;
});

//// next()
// next() is always pointed to the next function and whenever the next function is called, the next function is executed. If the next function is not called, the next function will not be executed. It is used to pass control to the next middleware function. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
//
