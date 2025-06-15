const expres = require("express");
const router = expres.Router();
const Joi = require("joi");

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    release_date: "1960-07-11",
    description:
      "A novel about the serious issues of rape and racial inequality, seen through the eyes of a child in the American South.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    release_date: "1949-06-08",
    description:
      "A dystopian story set in a totalitarian society under constant surveillance, where independent thinking is a crime.",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    release_date: "1925-04-10",
    description:
      "A tale of wealth, love, and tragedy set in the Roaring Twenties, exploring themes of the American Dream and social change.",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(books);
});
// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const book = books.find((b) => b.id === id);
//   res.status(200).json(book);
// });

router.post("/add", (req, res) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).required(),
    author: Joi.string().trim().min(4).required(),
    release_date: Joi.string().trim().min(4).required(),
    description: Joi.string().trim().min(4).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(404).json(error["message"]);
  }
  let newbooks = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    release_date: req.body.release_date,
    description: req.body.description,
  };
  books.push(newbooks);
  res.status(201).json(books);
});

router.put("/:id", (req, res) => {
  const idbook = parseInt(req.params.id);
  if (books.find((b) => b.id === idbook)) {
    console.log(books.find((b) => b.if === idbook));

    const schema = Joi.object({
      title: Joi.string().trim().min(3).required(),
      author: Joi.string().trim().min(4).required(),
      release_date: Joi.string().trim().min(4).required(),
      description: Joi.string().trim().min(4).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(404).json(error.original);
    }
    res.status(201).json("the book updated");
  } else {
    res.status(404).json("book not found");
  }
});
router.delete("/:id", (req, res) => {
  const idbook = parseInt(req.params.id);
  if (books.find((b) => b.id === idbook)) {
    res.status(201).json("the book deleted");
  } else {
    res.status(404).json("book not found");
  }
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let book = books.find((b) => b.id === id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json("I dont finde any book white this id");
  }
});

module.exports = router;
