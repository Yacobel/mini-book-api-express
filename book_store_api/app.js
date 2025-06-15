const express = require("express");
const app = express();
const mongoose = require("mongoose");
const autore = require("./router/authors");
app.use(express.json())

mongoose
  .connect("mongodb://localhost/bookapi")
  .then(() => console.log("wee are conecting"))
  .catch((e) => {
    console.log("errore in conection", e);
  });

app.use("", autore);
app.use("", autore);

app.listen(5000,() => {
  console.log("im lestning in prt 5000");
});
