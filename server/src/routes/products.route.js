const {
  getProducts,
  getProduct,
} = require("../controllers/products.controller");

const router = require("express").Router();

router.route("/:id").get(getProduct);
router.route("/").get(getProducts);

module.exports = router;
