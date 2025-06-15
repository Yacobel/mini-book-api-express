// core module

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>you are in home page</h1>");
});
let numbers = "";
for (let i = 1; i < 100; i++) {
  numbers += `- ${i} `;
}
app.get("/contact", (req, res) => {
  res.send("<h1>you are in contact page</h1>");
});
app.post("/add", (req, res) => {
  res.render("index.ejs", {
    name: "yacob",
    numbers: numbers,
  });
});

app.listen(5000, () => {
  console.log("servere is runing in 5000");
});
// custome module

// therd module
// const express= require("express")
