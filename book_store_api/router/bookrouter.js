const expres = require("express");
const router = expres.Router();
const asynchandler = require("express-async-handler");
const { book, bookvalidate } = require("../models/Book.js");

router.get(
  "/",
  asynchandler(async (req, res) => {
    const resulte = await book.find();
    res.status(200).json(resulte);
  })
);
router.get(
  "/:id",
  asynchandler(async (req, res) => {
    const resulte = await book.findById(req.params.id);
    res.status(200).json(resulte);
  })
);
router.delete(
  "/:id",
  asynchandler(async (req, res) => {
    const resulte = await book.findByIdAndDelete(req.params.id);
    res.status(200).json(resulte);
  })
);

router.post(
  "/add",
  asynchandler(async (req, res) => {
    const { error } = bookvalidate(req.body);
    if (error) {
      res.status(404).json(error["message"]);
    }
    const newbook = new book({
      title: req.body.title,
      price: req.body.price,
      date: req.body.date,
      description: req.body.description,
    });
    const resauls = await newbook.save();
    res.status(200).json(resauls);
    res.status(201).json(books);
  })
);
router.put(
  "/update/:id",
  asynchandler(async (req, res) => {
    const { error } = bookvalidate(req.body);
    if (error) {
      res.status(404).json(error["message"]);
    }
    const id = req.params.id;
    const resulte = await book.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          date: req.body.date,
          description: req.body.description,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(resulte);
  })
);

module.exports = router;
