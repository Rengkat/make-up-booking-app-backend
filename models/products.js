const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please name of product can't be empty"],
  },
  price: {
    type: Number,
    required: [true, "price must not be empty"],
  },
  description: {
    type: String,
    required: [true, "Description must not be empty"],
  },
  categories: {},
  tags: {},
  rating: {},
});
module.exports = mongoose.model("Products", ProductSchema);
