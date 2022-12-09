const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  fruit: { type: String },
  image: { type: String },
  price: { type: String },
  Background: { type: String },
});

const Product = mongoose.model('product',productSchema)

module.exports = Product;