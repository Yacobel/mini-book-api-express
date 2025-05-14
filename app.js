const express = require("express");
const app = express();
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    release_date: "1960-07-11",
    description:
      "A novel about the serious issues of rape and racial inequality, seen through the eyes of a child in the American South.",
  },
  {
    title: "1984",
    author: "George Orwell",
    release_date: "1949-06-08",
    description:
      "A dystopian story set in a totalitarian society under constant surveillance, where independent thinking is a crime.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    release_date: "1925-04-10",
    description:
      "A tale of wealth, love, and tragedy set in the Roaring Twenties, exploring themes of the American Dream and social change.",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>welcom in book store </h1>");
});
app.get("/book", (req, res) => {
  res.send(
    "We don't have any books here. Please enter a number in the URL, like /book/1"
  );
});

app.get("/book/:number", (req, res) => {
  let number = parseInt(req.params.number);
  if (isNaN(number) || number > 3 || number <= 0) {
    res.send("the numbers of books just 3 entre number betwine 1 and 3");
  } else {
    res.send(
      `${books[number - 1]["title"]}<br>
       ${books[number - 1]["author"]}<br>
        ${books[number - 1]["release_date"]}<br>
         ${books[number - 1]["description"]}<br>`
    );
  }
});
app.listen("5000", () => {
  console.log("I am litning in port 5000");
});
