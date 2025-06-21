const Joi = require("joi");
const mongoose = require("mongoose");
const bookschema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 20,
      minlength: 3,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 255,
      minlength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
function bookvalidate(obj) {
  const schema = Joi.object({
    title: Joi.string().max(20).min(3).required(),
    price: Joi.number().required(),
    date: Joi.string().required(),
    description: Joi.string().max(255).min(3).required(),
  });
  return schema.validate(obj);
}
const book = mongoose.model("book", bookschema);

module.exports = {
  book,
  bookvalidate,
};
