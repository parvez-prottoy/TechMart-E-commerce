const asyncHandler = require("../middlewares/asyncHandler");
const ProductModel = require("../models/product.model");
/**
 * @description fetch all products
 * @route GET /api/v1/products
 * @access public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
});
module.exports = { getProducts };
