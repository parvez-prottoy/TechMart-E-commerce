const { getProducts } = require("../controllers/products.controller");

const router = require("express").Router();

router.route("/").get(getProducts);

module.exports = router;
