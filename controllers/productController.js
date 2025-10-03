const Product = require('../models/productModel');

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category: category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET products by color (nested query)
exports.getProductsByColor = async (req, res) => {
  try {
    const color = req.params.color;
    const products = await Product.find({ 'variants.color': color });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST - Add one or multiple products
exports.createProduct = async (req, res) => {
  try {
    let productsData = req.body;

    // If the body is a single object, wrap it in an array
    if (!Array.isArray(productsData)) {
      productsData = [productsData];
    }

    // Insert multiple products at once
    const savedProducts = await Product.insertMany(productsData);

    res.status(201).json({
      message: "Products added successfully",
      data: savedProducts
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

