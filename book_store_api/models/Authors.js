const mongoose = require("mongoose");
const Joi = require("joi");
const Autoreschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20,
      default: "Authore",
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20,
      default: "Authorelastname",
    },
    email: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20,
      default: "example@gmail.com",
    },
    brday: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20,
      default: "Authore",
    },
    number: {
      type: Number,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 20,
      default: "Authore",
    },
  },
  {
    timestamps: true,
  }
);

const Authore = mongoose.model("Autore", Autoreschema);

function Validatecreateauthire(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().max(10).min(10).required(),
    lastName: Joi.string().trim().max(10).min(10).required(),
    email: Joi.string().trim().max(10).min(10).required(),
    brday: Joi.string().trim().max(10).min(10).required(),
    number: Joi.number().required(),
  });
  return schema.validate(obj);
}

module.exports = {
  Authore,
  Validatecreateauthire,
};
