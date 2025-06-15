const express = require("express");
const { Authore, Validatecreateauthire } = require("../models/Authors.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const resulte = await Authore.find();
  res.status(200).json(resulte);
});
router.get("/:id", async (req, res) => {
  try {
    const resulte = await Authore.findById(req.params.id);
    if (resulte) {
      res.status(200).json(resulte);
    } else {
      res.status(404).json("the user not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("wrong in server");
  }
});

router.post("/add", async (req, res) => {
  const { errore } = Validatecreateauthire(req.body);
  if (errore) {
    res.status(404).json({ message: errore.original });
  } else {
    try {
      const autore = new Authore({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        brday: req.body.brday,
        number: req.body.number,
      });
      const resulte = await autore.save();
      res.status(201).json(resulte);
    } catch (error) {
      console.log(error);
      res.status(500).json("erore frome servere", error);
    }
  }
});

router.put("/:id", async (req, res) => {
  const { errore } = Validatecreateauthire(req.body);
  if (errore) {
    return res.status(404).json(errore.original);
  }

  const id = req.params.id;
  try {
    const resulte = await Authore.findByIdAndUpdate(
      id,
      {
        $set: {
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          brday: req.body.brday,
          number: req.body.number,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(resulte);
  } catch (error) {
    console.log(error);
    res.status(500).json("wronge in the server");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const authore = await Authore.findById(req.params.id);
    if (authore) {
      const deleted = await Authore.findByIdAndDelete(req.params.id);
      res.status(200).json(deleted);
    } else {
      res.status(404).json("the book not found");
    }
  } catch (error) {}
});

module.exports = router;
