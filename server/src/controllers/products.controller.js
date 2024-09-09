const asyncHandler = require("../middlewares/asyncHandler");
const ProductModel = require("../models/product.model");
/**
 * @description fetch product by id
 * @route GET /api/v1/products/:id
 * @access public
 */
const getProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  res.json(product);
});
/**
 * @description fetch all products
 * @route GET /api/v1/products
 * @access public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
});
module.exports = { getProducts, getProduct };
