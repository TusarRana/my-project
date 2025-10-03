const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/by-color/:color', productController.getProductsByColor);
router.post('/', productController.createProduct);

module.exports = router;
