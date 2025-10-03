const mongoose = require('mongoose');

// Schema for product variants
const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

// Main product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  variants: [variantSchema]
});

module.exports = mongoose.model('Product', productSchema);
