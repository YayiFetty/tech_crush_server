//import express
const express = require("express");

//step2: create an express app
const app = express();
const studentsInfo = [
  {
    name: "Yayi",
    age: 20,
    grade: "A",
  },

  { name: "Zeezo", age: 20, grade: "B" },
  { name: "Fetty", age: 20, grade: "C" },
];
//define a route handler
app.get("/", (req, res) => {
  res.send("welcome to the express");
});
app.get("/all-data", (req, res) => {
  res.json(studentsInfo);
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.listen(3000, () => {
  console.log("server is running");
});
